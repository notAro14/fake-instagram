import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SimpleInput, Password, FormWrapper, Button } from 'Components/common';

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

const SignUp = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
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
      <Password
        errors={errors}
        control={control}
        ref={register}
        name="password"
      >
        Password
      </Password>
      <Button type="submit">Next</Button>
    </FormWrapper>
  );
};

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUp;
