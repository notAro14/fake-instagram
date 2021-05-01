import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { MIME_TYPES, FILE_SIZE_LIMIT, LOADING, IDLE } from '../../constants';
import { publish } from '../../api/post';

const schema = yup.object().shape({
  title: yup.string().max(30).required(),
  description: yup.string().max(30).required(),
  image: yup
    .mixed()
    .required()
    .test(
      'fileExtension',
      'Only jpeg, jpg and png extensions are allowed',
      value => value && MIME_TYPES.includes(value[0].type)
    )
    .test(
      'fileSize',
      'The file can not be bigger than 2 mo',
      value => value && value[0].size <= FILE_SIZE_LIMIT
    ),
});

const PublishPost = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });
  const [state, setState] = useState(IDLE);
  const history = useHistory();

  const {
    state: { user },
  } = useUser();

  const onSubmit = ({ title, description, image }) => {
    setState(LOADING);
    publish({ title, description, image }, { token: user.token }).then(
      post => {
        setState(IDLE);
        history.push('/');
        toast.success(`✨ "${post.title}" published with success ✨`);
      },
      error => {
        toast.error(error.message.split('Error: ')[1]);
        setState(IDLE);
      }
    );
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
          <FileInput
            placeholder=".jpg, .jpeg, .png"
            ref={register}
            errors={errors}
            name="image"
          >
            Upload an image
          </FileInput>
          <Button type="submit">Post</Button>
        </FormWrapper>
      </Box>
      {state === LOADING ? <Spinner /> : null}
    </>
  );
};

export default PublishPost;
