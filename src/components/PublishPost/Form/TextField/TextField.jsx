/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { FieldWrapper, InputWrapper, Input, Label } from './TextField.style';

const TextField = forwardRef(({ name, children, placeholder }, ref) => {
  const { errors } = useFormContext();
  const fieldError = errors[name];
  return (
    <FieldWrapper>
      <InputWrapper>
        <Input
          ref={ref}
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
        />
        <Label htmlFor={name}>{children}</Label>
      </InputWrapper>
      {fieldError ? (
        <span style={{ color: 'red', fontSize: '0.5rem' }}>
          {fieldError.message}
        </span>
      ) : null}
    </FieldWrapper>
  );
});

TextField.defaultProps = {
  placeholder: 'I am a placeholder',
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  placeholder: PropTypes.string,
};

export default TextField;
