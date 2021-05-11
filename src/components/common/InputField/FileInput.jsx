/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Error, FileInputLabel, FileInputWrapper } from './InputField.style'

const FileInput = forwardRef(({ name, children, errors }, ref) => {
  const fieldError = errors[name]

  return (
    <FileInputWrapper>
      <FileInputLabel style={{ fontSize: '0.9rem' }} htmlFor={name}>
        {children}
      </FileInputLabel>
      <input ref={ref} type='file' name={name} id={name} />
      {fieldError && <Error role='alert'>{fieldError.message}</Error>}
    </FileInputWrapper>
  )
})

FileInput.defaultProps = {
  errors: {},
}

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  errors: PropTypes.objectOf(PropTypes.shape({ message: PropTypes.string })),
}

export default FileInput
