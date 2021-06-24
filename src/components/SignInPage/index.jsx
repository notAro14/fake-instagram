import React from 'react'
import { PrimaryLink, Title, Box } from '../common'
import SignInForm from '../SignInForm'

const SignInPage = () => (
  <>
    <Box>
      <Title>Instagram</Title>
      <SignInForm />
    </Box>
    <Box>
      <p>
        Don&apos;t have an account ?{' '}
        <PrimaryLink to='signup'>Sign up</PrimaryLink>
      </p>
    </Box>
  </>
)

export default SignInPage
