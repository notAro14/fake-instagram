import React from 'react';
import * as yup from 'yup';
import { SignInWrapper, Title } from './SignIn.style';
import Form, {
  TextField,
  Button,
  PasswordField,
} from '~components/common/Form';
import { Box } from '~components/common/Box';
import { PrimaryLink } from '~components/common/Link';

const schema = yup.object().shape({
  email: yup.string().email().required('Enter a valid email'),
  password: yup.string().required('Enter a valid password'),
});

const SignIn = () => (
  <>
    <SignInWrapper>
      <Title>Instagram</Title>
      <Form yupSchema={schema} onSubmit={data => console.log(data)}>
        <TextField type="email" name="email">
          Email
        </TextField>
        <PasswordField name="password">Password</PasswordField>
        <Button type="submit">Sign in</Button>
      </Form>
    </SignInWrapper>
    <Box>
      <p>
        Don&apos;t have an account ?{' '}
        <PrimaryLink to="signup">Sign up</PrimaryLink>
      </p>
    </Box>
  </>
);

export default SignIn;
