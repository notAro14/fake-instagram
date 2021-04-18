import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import Spinner from '~components/common/Spinner';
import Modal from '~components/common/Modal';

const EmojiPicker = loadable(() =>
  import(/* webpackChunkName: "EmojiPicker" */ './EmojiPicker')
);

const EmojiPickerModal = ({
  onEmojiSelection,
  isEmojiPickerOpen,
  closeEmojiPicker,
}) => {
  return (
    <Modal isOpen={isEmojiPickerOpen} onClose={closeEmojiPicker}>
      <EmojiPicker
        fallback={<Spinner />}
        onEmojiSelection={onEmojiSelection}
        closeEmojiPicker={closeEmojiPicker}
      />
    </Modal>
  );
};

EmojiPickerModal.propTypes = {
  onEmojiSelection: PropTypes.func.isRequired,
  isEmojiPickerOpen: PropTypes.bool.isRequired,
  closeEmojiPicker: PropTypes.func.isRequired,
};

export default EmojiPickerModal;
