/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  FieldWrapper,
  InputWrapper,
  Input,
  Label,
  Error,
} from './InputField.style';

const SimpleInput = forwardRef(
  ({ name, children, placeholder, type, errors, extra }, ref) => {
    const fieldError = errors[name];

    return (
      <FieldWrapper>
        <InputWrapper>
          <Input
            autoComplete="off"
            ref={ref}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
          />
          <Label htmlFor={name}>{children}</Label>
          {extra}
        </InputWrapper>
        {fieldError && <Error role="alert">{fieldError.message}</Error>}
      </FieldWrapper>
    );
  }
);

SimpleInput.defaultProps = {
  extra: null,
  placeholder: 'I am a placeholder',
  type: 'text',
  errors: {},
};

SimpleInput.propTypes = {
  extra: PropTypes.element,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.objectOf(PropTypes.shape({ message: PropTypes.string })),
};

export default SimpleInput;
