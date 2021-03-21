import React from 'react';
import * as yup from 'yup';
import Form, { TextField, Button } from '~components/common/Form';
import { PublishPostWrapper } from './PublishPost.style';

const schema = yup.object().shape({
  title: yup.string().max(30).required(),
  description: yup.string().max(30).required(),
});

const PublishPost = () => {
  return (
    <PublishPostWrapper>
      <h2>Publish your post</h2>
      <Form yupSchema={schema} onSubmit={data => console.log(data)}>
        <TextField name="title">Give your post a title</TextField>
        <TextField name="description">Add a description</TextField>
        <Button type="submit">Post</Button>
      </Form>
    </PublishPostWrapper>
  );
};

export default PublishPost;
