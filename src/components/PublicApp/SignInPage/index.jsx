import React from 'react';
import { PrimaryLink, Title, Box } from 'Components/common';
import SignIn from './SignIn';

const SignInPage = () => (
  <>
    <Box>
      <Title>Instagram</Title>
      <SignIn onSubmit={data => console.log(data)} />
    </Box>
    <Box>
      <p>
        Don&apos;t have an account ?{' '}
        <PrimaryLink to="signup">Sign up</PrimaryLink>
      </p>
    </Box>
  </>
);

export default SignInPage;
