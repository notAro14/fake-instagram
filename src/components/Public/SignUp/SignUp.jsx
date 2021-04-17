import React from 'react';
import * as yup from 'yup';
import { SignUpWrapper, Title, CatchPhrase } from './SignUp.style';
import Form, {
  TextField,
  Button,
  PasswordField,
} from '~components/common/Form';

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

const SignUp = () => (
  <SignUpWrapper>
    <Title>Instagram</Title>
    <CatchPhrase>
      Sign up to see your friend&apos;s photos and videos.
    </CatchPhrase>
    <Form yupSchema={schema} onSubmit={data => console.log(data)}>
      <TextField type="email" name="email">
        Email
      </TextField>
      <TextField name="fullName">Full name</TextField>
      <TextField name="username">Username</TextField>
      <PasswordField name="password">Password</PasswordField>
      <Button type="submit">Next</Button>
    </Form>
  </SignUpWrapper>
);

export default SignUp;
