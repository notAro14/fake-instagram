import React from 'react';
import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormWrapper from './Form.style';

const Form = ({ yupSchema, onSubmit, children }) => {
  const methods = useForm({ mode: 'onBlur', resolver: yupResolver(yupSchema) });
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </FormWrapper>
    </FormProvider>
  );
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  yupSchema: PropTypes.object.isRequired,
};

export default Form;
