import React from 'react';
// import axios from 'axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Title,
  FormWrapper,
  SimpleInput,
  Button,
  FileInput,
} from '../common';
import { useUser } from '../../context/user.context';

const schema = yup.object().shape({
  title: yup.string().max(30).required(),
  description: yup.string().max(30).required(),
  images: yup.mixed().required(),
});

const PublishPost = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const {
    state: { user },
  } = useUser();

  const onSubmit = ({ title, description, images }) => {
    const formData = new FormData();
    const headers = new Headers();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('images', images[0]);
    headers.append('Authorization', `Bearer ${user.token}`);
    fetch('/api/posts', {
      method: 'POST',
      headers,
      body: formData,
    })
      .then(data => console.log({ data }))
      .catch(error => console.error({ error }));
    // const data = await response.json();
    // if (response.ok) {
    //   console.log('ALL IS GOOD', { response, data });
    // } else {
    //   console.log('NOT OK', { response, data });
    // }
  };
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
        <FileInput
          placeholder=".jpg, .jpeg, .png"
          ref={register}
          errors={errors}
          name="images"
        >
          Upload an image
        </FileInput>
        <Button type="submit">Post</Button>
      </FormWrapper>
    </Box>
  );
};

export default PublishPost;
