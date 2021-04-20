import React from 'react';
import { CatchPhrase, Title, PrimaryLink, Box } from '~components/common';
import SignUp from './SignUp';

const SignUpPage = () => (
  <>
    <Box>
      <Title>Instagram</Title>
      <CatchPhrase>
        Sign up to see your friend&apos;s photos and videos.
      </CatchPhrase>
      <SignUp onSubmit={data => console.log(data)} />
    </Box>
    <Box>
      <p>
        Already have an account ? <PrimaryLink to="signin">Sign in</PrimaryLink>
      </p>
    </Box>
  </>
);

export default SignUpPage;
