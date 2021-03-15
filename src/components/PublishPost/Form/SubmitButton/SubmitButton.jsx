import React from 'react';
import PropTypes from 'prop-types';
import { SubmitButtonWrapper } from './SubmitButton.style';

const SubmitButton = ({ children }) => (
  <SubmitButtonWrapper type="submit">{children}</SubmitButtonWrapper>
);

SubmitButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SubmitButton;
