import React, { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Button,
  SimpleInput,
  Password,
  FormWrapper,
  Spinner,
} from 'Components/common';
import { useUser } from '../../context/user.context';

const schema = yup.object().shape({
  email: yup.string().email().required('Enter a valid email'),
  password: yup.string().required('Enter a valid password'),
});

const LOADING = 'LOADING';
const IDLE = 'IDLE';

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const [state, setState] = useState(IDLE);

  const { setUser } = useUser();

  const history = useHistory();

  const onSubmit = async formData => {
    setState(LOADING);
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setState(IDLE);
        reset();
        setUser(data.user);
        history.push('/');
      } else {
        toast.error(data.error);
        setState(IDLE);
      }
    } catch (error) {
      toast.error(error.error);
      setState(IDLE);
    }
  };
  return (
    <FormWrapper
      onSubmit={handleSubmit(({ email, password }) =>
        onSubmit({ email, password })
      )}
    >
      <SimpleInput type="email" name="email" ref={register} errors={errors}>
        Email
      </SimpleInput>
      <Password name="password" ref={register} errors={errors}>
        Password
      </Password>
      <Button type="submit">Sign in</Button>
      {state.label === LOADING && <Spinner />}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        draggable
      />
    </FormWrapper>
  );
};

export default SignIn;
