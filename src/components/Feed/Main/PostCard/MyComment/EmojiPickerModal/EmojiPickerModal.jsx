import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import loadable from '@loadable/component';
import Spinner from '~components/common/Spinner';

const EmojiPicker = loadable(() =>
  import(/* webpackChunkName: "EmojiPickerCore" */ './EmojiPicker')
);

ReactModal.setAppElement('#root');
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

const EmojiPickerModal = ({
  onEmojiSelection,
  isEmojiPickerOpen,
  closeEmojiPicker,
}) => {
  return (
    <ReactModal
      isOpen={isEmojiPickerOpen}
      shouldCloseOnOverlayClick
      onRequestClose={closeEmojiPicker}
    >
      <EmojiPicker
        fallback={<Spinner />}
        onEmojiSelection={onEmojiSelection}
        closeEmojiPicker={closeEmojiPicker}
      />
    </ReactModal>
  );
};

EmojiPickerModal.propTypes = {
  onEmojiSelection: PropTypes.func.isRequired,
  isEmojiPickerOpen: PropTypes.bool.isRequired,
  closeEmojiPicker: PropTypes.func.isRequired,
};

export default EmojiPickerModal;
