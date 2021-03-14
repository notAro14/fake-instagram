import React, { useState, forwardRef } from 'react';
import {
  MyCommentWrapper,
  MyCommentForm,
  MyCommentInput,
  MyCommentSubmitBtn,
  OpenEmojiPickerModal,
} from './MyComment.style';
import EmojiPickerModal from './EmojiPickerModal';
import useEmojiPicker from './useEmojiPicker';

const MyComment = forwardRef((props, ref) => {
  const [input, setInput] = useState('');
  const inputRef = ref;
  const onInputChange = evt => setInput(evt.target.value);
  const onEmojiSelected = emoji => {
    setInput(prev => prev + emoji.native);
    inputRef.current.focus();
  };

  const {
    isEmojiPickerOpen,
    onEmojiSelection,
    closeEmojiPicker,
    openEmojiPicker,
  } = useEmojiPicker(onEmojiSelected);

  return (
    <MyCommentWrapper>
      <EmojiPickerModal
        isEmojiPickerOpen={isEmojiPickerOpen}
        closeEmojiPicker={closeEmojiPicker}
        onEmojiSelection={onEmojiSelection}
      />
      <OpenEmojiPickerModal onClick={openEmojiPicker} />
      <MyCommentForm
        onSubmit={evt => {
          evt.preventDefault();
          setInput('');
        }}
      >
        <MyCommentInput
          placeholder="Add a comment..."
          name="my-comment"
          type="text"
          onChange={onInputChange}
          value={input}
          ref={inputRef}
        />
        <MyCommentSubmitBtn disabled={input.length === 0} type="submit">
          Publish
        </MyCommentSubmitBtn>
      </MyCommentForm>
    </MyCommentWrapper>
  );
});

export default MyComment;
