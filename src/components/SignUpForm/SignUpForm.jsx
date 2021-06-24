import React from 'react'
import { func } from 'prop-types'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SimpleInput, Password, FormWrapper, Button } from '../common'

const schema = yup.object().shape({
  email: yup.string().email().required('Enter a valid email'),
  displayname: yup
    .string()
    .max(30)
    .required('Enter your name')
    .matches(/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/, 'Name is not valid'),
  password: yup
    .string()
    .required('Enter a valid password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'password must contain 8 characters: uppercase, lowercase, number, special character'
    ),
  username: yup
    .string()
    .max(10)
    .required('Enter your username')
    .matches(
      /^[a-z_-]{4,}$/,
      'Username is invalid. Don\'t use uppercase and special characters except "_" and "-"'
    ),
})

const SignUpForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) })

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SimpleInput errors={errors} ref={register} type='email' name='email'>
        Email
      </SimpleInput>
      <SimpleInput errors={errors} ref={register} name='displayname'>
        Full name
      </SimpleInput>
      <SimpleInput errors={errors} ref={register} name='username'>
        Username
      </SimpleInput>
      <Password errors={errors} ref={register} name='password'>
        Password
      </Password>
      <Button type='submit'>Next</Button>
    </FormWrapper>
  )
}

SignUpForm.propTypes = {
  onSubmit: func.isRequired,
}

export default SignUpForm
