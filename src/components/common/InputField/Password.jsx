/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, forwardRef } from 'react';
import { useWatch } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Toggle } from './InputField.style';
import SimpleInput from './SimpleInput';

const PasswordField = forwardRef(
  // eslint-disable-next-line
  ({ name, children, placeholder, errors, control }, ref) => {
    const [hidden, setHidden] = useState(true);
    const togglePassword = () => setHidden(x => !x);

    const value = useWatch({ control, name: 'password', defaultValue: '' });
    useEffect(() => {
      if (!value) setHidden(true);
    }, [value]);
    return (
      <SimpleInput
        extra={<Toggle onClick={togglePassword}>Display</Toggle>}
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
