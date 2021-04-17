/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import PropTypes from 'prop-types';
import {
  FieldWrapper,
  InputWrapper,
  Input,
  Label,
  Error,
  Toggle,
} from './PasswordField.style';

const PasswordField = ({ name, children, placeholder }) => {
  const { errors, register } = useFormContext();
  const fieldError = errors[name];

  const [hidden, setHidden] = useState(true);
  const togglePassword = () => setHidden(x => !x);

  const value = useWatch({ name: 'password', defaultValue: '' });
  useEffect(() => {
    if (!value) setHidden(true);
  }, [value]);
  return (
    <FieldWrapper>
      <InputWrapper>
        <Input
          ref={register}
          type={hidden ? 'password' : 'text'}
          name={name}
          id={name}
          placeholder={placeholder}
        />
        <Label htmlFor={name}>{children}</Label>
        {value && <Toggle onClick={togglePassword}>Display</Toggle>}
      </InputWrapper>
      {fieldError ? (
        <Error role="alert">{fieldError.message}</Error>
      ) : (
        <div style={{ color: 'transparent' }}>Foo</div>
      )}
    </FieldWrapper>
  );
};

PasswordField.defaultProps = {
  placeholder: 'I am a placeholder',
};

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  placeholder: PropTypes.string,
};

export default PasswordField;
