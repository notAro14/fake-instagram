import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
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
import { useUser } from 'Context/user.context';
import { signup } from '../../api/user';

const schema = yup.object().shape({
  email: yup.string().email().required('Enter a valid email'),
  displayname: yup.string().max(20).required('Enter your name'),
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

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const history = useHistory();
  const { setUser } = useUser();

  const [state, setState] = useState(IDLE);
  const onSubmit = async ({ email, password, username, displayname }) => {
    setState(LOADING);
    signup({ email, password, username, displayname }).then(
      user => {
        setState(IDLE);
        setUser(user);
        history.push('/');
        toast.success(`Welcome ${user.displayname.split(' ')[0]}`);
      },
      error => {
        toast.error(error.message.split('Error: ')[1]);
        setState(IDLE);
      }
    );
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SimpleInput errors={errors} ref={register} type="email" name="email">
        Email
      </SimpleInput>
      <SimpleInput errors={errors} ref={register} name="displayname">
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
    </FormWrapper>
  );
};

export default SignUp;
