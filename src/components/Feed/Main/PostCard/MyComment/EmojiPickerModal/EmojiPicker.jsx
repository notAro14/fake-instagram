import 'emoji-mart/css/emoji-mart.css';
import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Picker } from 'emoji-mart/dist-modern';
import PropTypes from 'prop-types';

const EmojiPicker = ({ closeEmojiPicker, onEmojiSelection }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Picker
        set="google"
        native
        style={{ maxWidth: '100vw' }}
        theme="auto"
        onSelect={onEmojiSelection}
      />
      <RiCloseFill
        style={{
          alignSelf: 'flex-end',
          cursor: 'pointer',
          color: '#fafafa',
          fontSize: '1.5rem',
        }}
        onClick={closeEmojiPicker}
      />
    </div>
  );
};

EmojiPicker.propTypes = {
  onEmojiSelection: PropTypes.func.isRequired,
  closeEmojiPicker: PropTypes.func.isRequired,
};

export default EmojiPicker;
