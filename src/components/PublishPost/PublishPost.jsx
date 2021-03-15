import React from 'react';
import Form, { TextField, SubmitButton } from './Form';
import { PublishPostWrapper } from './PublishPost.style';

const PublishPost = () => {
  return (
    <PublishPostWrapper>
      <h2>Publish your post</h2>
      <Form>
        <TextField required name="title">
          Give your post a title
        </TextField>
        <TextField name="description">Add a description</TextField>
        <SubmitButton>Post</SubmitButton>
      </Form>
    </PublishPostWrapper>
  );
};

export default PublishPost;
