import React from 'react';
import * as yup from 'yup';
import Form, { TextField, Button } from '~components/common/Form';
import { Box } from '~components/common/Box';
import { Title } from '~components/common/Title';

const schema = yup.object().shape({
  title: yup.string().max(30).required(),
  description: yup.string().max(30).required(),
});

const PublishPost = () => {
  return (
    <Box>
      <Title>Publish your post</Title>
      <Form yupSchema={schema} onSubmit={data => console.log(data)}>
        <TextField name="title">Give your post a title</TextField>
        <TextField name="description">Add a description</TextField>
        <Button type="submit">Post</Button>
      </Form>
    </Box>
  );
};

export default PublishPost;
