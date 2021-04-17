/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import {
  FieldWrapper,
  InputWrapper,
  Input,
  Label,
  Error,
} from './TextField.style';

const TextField = ({ name, children, placeholder, type }) => {
  const { errors, register } = useFormContext();
  const fieldError = errors[name];
  return (
    <FieldWrapper>
      <InputWrapper>
        <Input
          autoComplete={type === 'email' ? 'on' : 'off'}
          ref={register}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
        />
        <Label htmlFor={name}>{children}</Label>
      </InputWrapper>
      {fieldError ? (
        <Error role="alert">{fieldError.message}</Error>
      ) : (
        <div style={{ color: 'transparent' }}>Foo</div>
      )}
    </FieldWrapper>
  );
};

TextField.defaultProps = {
  placeholder: 'I am a placeholder',
  type: 'text',
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default TextField;
