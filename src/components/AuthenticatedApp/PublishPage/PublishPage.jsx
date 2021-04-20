import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Title,
  FormWrapper,
  SimpleInput,
  Button,
} from '~components/common';

const schema = yup.object().shape({
  title: yup.string().max(30).required(),
  description: yup.string().max(30).required(),
});

const PublishPost = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const onSubmit = data => console.log(data);
  return (
    <Box>
      <Title>Publish your post</Title>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SimpleInput ref={register} errors={errors} name="title">
          Give your post a title
        </SimpleInput>
        <SimpleInput ref={register} errors={errors} name="description">
          Add a description
        </SimpleInput>
        <Button type="submit">Post</Button>
      </FormWrapper>
    </Box>
  );
};

export default PublishPost;
