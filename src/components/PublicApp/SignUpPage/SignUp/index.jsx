import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  SimpleInput,
  Password,
  FormWrapper,
  Button,
  Spinner,
} from 'Components/common';

const schema = yup.object().shape({
  email: yup.string().email().required('Enter a valid email'),
  fullName: yup.string().max(20).required('Enter your name'),
  password: yup
    .string()
    .required('Enter a valid password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'password must contain 8 characters: uppercase, lowercase, number, special character'
    ),
  username: yup.string().max(10).required('Enter your username'),
});

const IDLE = 'IDLE';
const LOADING = 'LOADING';
const INITIAL_STATE = {
  data: null,
  label: IDLE,
};

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });

  const [state, setState] = useState(INITIAL_STATE);
  const onSubmit = async data => {
    setState({
      data: null,
      label: LOADING,
    });
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const message = await response.json();
      if (response.ok) {
        setState({ data: message, label: IDLE });
        reset();
      } else {
        toast.error(message.error);
        setState(INITIAL_STATE);
      }
    } catch (error) {
      toast.error(error.error);
      setState(INITIAL_STATE);
    }
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SimpleInput errors={errors} ref={register} type="email" name="email">
        Email
      </SimpleInput>
      <SimpleInput errors={errors} ref={register} name="fullName">
        Full name
      </SimpleInput>
      <SimpleInput errors={errors} ref={register} name="username">
        Username
      </SimpleInput>
      <Password errors={errors} ref={register} name="password">
        Password
      </Password>
      <Button type="submit">Next</Button>
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

export default SignUp;
