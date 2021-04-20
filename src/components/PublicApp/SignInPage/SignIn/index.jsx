import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, SimpleInput, Password, FormWrapper } from 'Components/common';

const schema = yup.object().shape({
  email: yup.string().email().required('Enter a valid email'),
  password: yup.string().required('Enter a valid password'),
});

const SignIn = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  return (
    <FormWrapper
      onSubmit={handleSubmit(({ email, password }) =>
        onSubmit({ email, password })
      )}
    >
      <SimpleInput type="email" name="email" ref={register} errors={errors}>
        Email
      </SimpleInput>
      <Password
        control={control}
        name="password"
        ref={register}
        errors={errors}
      >
        Password
      </Password>
      <Button type="submit">Sign in</Button>
    </FormWrapper>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
