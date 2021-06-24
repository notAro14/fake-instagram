import React from 'react'
import * as yup from 'yup'
import { func } from 'prop-types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button, SimpleInput, Password, FormWrapper } from '../common'

const schema = yup.object().shape({
  email: yup.string().email().required('Enter a valid email'),
  password: yup.string().required('Enter a valid password'),
})

const SignInForm = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) })

  return (
    <FormWrapper
      onSubmit={handleSubmit(({ email, password }) =>
        onSubmit({ email, password })
      )}
    >
      <SimpleInput type='email' name='email' ref={register} errors={errors}>
        Email
      </SimpleInput>
      <Password name='password' ref={register} errors={errors}>
        Password
      </Password>
      <Button type='submit'>Sign in</Button>
    </FormWrapper>
  )
}

SignInForm.propTypes = {
  onSubmit: func.isRequired,
}

export default SignInForm
