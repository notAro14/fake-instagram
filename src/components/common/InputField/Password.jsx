/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Toggle } from './InputField.style';
import SimpleInput from './SimpleInput';

const PasswordField = forwardRef(
  ({ name, children, placeholder, errors }, ref) => {
    const [hidden, setHidden] = useState(true);
    const togglePassword = () => setHidden(x => !x);

    return (
      <SimpleInput
        extra={
          <Toggle onClick={togglePassword}>
            {hidden ? 'Display' : 'Hide'}
          </Toggle>
        }
        placeholder={placeholder}
        name={name}
        type={hidden ? 'password' : 'text'}
        errors={errors}
        ref={ref}
      >
        {children}
      </SimpleInput>
    );
  }
);

PasswordField.defaultProps = {
  errors: {},
  placeholder: 'I am a placeholder',
};

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  errors: PropTypes.objectOf(PropTypes.shape({ message: PropTypes.string })),
  placeholder: PropTypes.string,
};

export default PasswordField;
