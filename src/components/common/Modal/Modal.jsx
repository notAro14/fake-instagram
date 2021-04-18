import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './Modal.scss';

ReactModal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 'var(--navbar-height)',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(3, 3, 3, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    WebkitOverflowScrolling: 'touch',
    borderRadius: '5px',
    outline: 'none',
  },
};

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={onClose}
      closeTimeoutMS={200}
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
