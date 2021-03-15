import React from 'react';
import PropTypes from 'prop-types';
import { FormWrapper } from './Form.style';

const Form = ({ children }) => {
  return <FormWrapper>{children}</FormWrapper>;
};

Form.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Form;
