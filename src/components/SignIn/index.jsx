import React, { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Button, SimpleInput, Password, FormWrapper, Spinner } from '../common';
import { useUser } from '../../context/user.context';
import { login } from '../../api/user';
import { LOADING, IDLE } from '../../constants';

const schema = yup.object().shape({
  email: yup.string().email().required('Enter a valid email'),
  password: yup.string().required('Enter a valid password'),
});

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const [state, setState] = useState(IDLE);
  const { setUser } = useUser();
  const history = useHistory();
  const onSubmit = ({ email, password }) => {
    setState(LOADING);
    login({ email, password }).then(
      user => {
        setState(IDLE);
        setUser(user);
        history.push('/');
        toast.success(`Welcome back ${user.displayname.split(' ')[0]} !`);
      },
      error => {
        toast.error(error.message);
        setState(IDLE);
      }
    );
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
    </FormWrapper>
  );
};

export default SignIn;
