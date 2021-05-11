import React from 'react'
import { CatchPhrase, Title, PrimaryLink, Box } from '../common'
import SignUp from '../SignUp'

const SignUpPage = () => {
  return (
    <>
      <Box>
        <Title>Instagram</Title>
        <CatchPhrase>
          Sign up to see your friend&apos;s photos and videos.
        </CatchPhrase>
        <SignUp />
      </Box>
      <Box>
        <p>
          Already have an account ?{' '}
          <PrimaryLink to='signin'>Sign in</PrimaryLink>
        </p>
      </Box>
    </>
  )
}

export default SignUpPage
