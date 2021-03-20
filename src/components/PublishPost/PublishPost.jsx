import React from 'react';
import Form, { TextField, Button } from './Form';
import { PublishPostWrapper } from './PublishPost.style';

const PublishPost = () => {
  return (
    <PublishPostWrapper>
      <h2>Publish your post</h2>
      <Form>
        <TextField required name="title">
          Give your post a title
        </TextField>
        <TextField required name="description">
          Add a description
        </TextField>
        <Button type="submit">Post</Button>
      </Form>
    </PublishPostWrapper>
  );
};

export default PublishPost;
