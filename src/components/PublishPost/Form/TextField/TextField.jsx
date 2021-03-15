/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { FieldWrapper, Input, Label } from './TextField.style';

const TextField = ({ name, children, placeholder, required }) => {
  return (
    <FieldWrapper>
      <Input
        required={required}
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
      />
      <Label htmlFor={name}>{children}</Label>
    </FieldWrapper>
  );
};

TextField.defaultProps = {
  placeholder: 'I am a placeholder',
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool.isRequired,
};

export default TextField;
