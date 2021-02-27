import React, { useState, useRef } from 'react';
import {
  MyComment,
  MyCommentForm,
  MyCommentInput,
  MyCommentSubmitBtn,
  Emoji,
} from '../style/PublishComment.style';
import EmojiPicker from './EmojiPicker';
import useEmojiPicker from '../hooks/useEmojiPicker';

const PublishComment = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef();
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
    <MyComment>
      <EmojiPicker
        isEmojiPickerOpen={isEmojiPickerOpen}
        closeEmojiPicker={closeEmojiPicker}
        onEmojiSelection={onEmojiSelection}
      />
      <Emoji onClick={openEmojiPicker} />
      <MyCommentForm>
        <MyCommentInput
          placeholder="Add a comment..."
          id="my-comment"
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
    </MyComment>
  );
};

export default PublishComment;
