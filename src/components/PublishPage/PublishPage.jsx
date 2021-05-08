import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';
import {
  Box,
  Title,
  FormWrapper,
  SimpleInput,
  Button,
  FileInput,
  Spinner,
} from '../common';
import { useUser } from '../../context/user.context';
import { MIME_TYPES, FILE_SIZE_LIMIT } from '../../constants';
import { publish } from '../../api/post';

const schema = yup.object().shape({
  title: yup.string().max(30).required('A title is needed'),
  description: yup
    .string()
    .max(30)
    .required('Describe your post with a few words'),
  image: yup
    .mixed()
    .test(
      'fileRequired',
      'Crikey! What is Instagram without pictures ?!',
      value => value.length > 0
    )
    .test(
      'fileExtension',
      'Only jpeg, jpg and png extensions are allowed',
      value => value.length && MIME_TYPES.includes(value[0].type)
    )
    .test(
      'fileSize',
      'The file can not be bigger than 2 mo',
      value => value.length && value[0].size <= FILE_SIZE_LIMIT
    ),
});

const PublishPost = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const queryClient = useQueryClient();

  const {
    state: { user },
  } = useUser();
  const mutation = useMutation(publish, {
    // invalidate and refetch
    onSuccess: newPost => {
      toast.success(`✨ Your post "${newPost.title}" is (a)live ✨`);
      reset();
    },
    onError: err => {
      toast.error(err.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries('posts');
    },
  });
  const onSubmit = ({ title, description, image }) => {
    mutation.mutate({
      title,
      description,
      image,
      token: user.token,
    });
  };
  return (
    <>
      <Box>
        <Title>Publish your post</Title>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <SimpleInput ref={register} errors={errors} name="title">
            Give your post a title
          </SimpleInput>
          <SimpleInput ref={register} errors={errors} name="description">
            Add a description
          </SimpleInput>
          <FileInput ref={register} errors={errors} name="image">
            Upload an image
          </FileInput>
          <Button type="submit">
            {mutation.isLoading ? '...uploading...' : 'Post'}
          </Button>
        </FormWrapper>
      </Box>
      {mutation.isLoading ? <Spinner /> : null}
    </>
  );
};

export default PublishPost;
