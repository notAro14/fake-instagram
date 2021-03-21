import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Form, { TextField, Button } from './Form';
import { PublishPostWrapper } from './PublishPost.style';

const PublishPost = () => {
  const methods = useForm({ mode: 'onBlur' });
  return (
    <PublishPostWrapper>
      <h2>Publish your post</h2>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(data => console.log(data))}>
          <TextField
            ref={methods.register({
              required: 'The title is fucking required',
              maxLength: { value: 5, message: 'Too Long' },
            })}
            name="title"
          >
            Give your post a title
          </TextField>
          <TextField
            ref={methods.register({ required: 'It is required' })}
            name="description"
          >
            Add a description
          </TextField>
          <Button type="submit">Post</Button>
        </Form>
      </FormProvider>
    </PublishPostWrapper>
  );
};

export default PublishPost;
