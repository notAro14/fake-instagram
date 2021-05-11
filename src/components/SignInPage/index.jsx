import React from 'react'
import { PrimaryLink, Title, Box } from '../common'
import SignIn from '../SignIn'

const SignInPage = () => (
  <>
    <Box>
      <Title>Instagram</Title>
      <SignIn />
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
