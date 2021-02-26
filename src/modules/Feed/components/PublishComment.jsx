import React from 'react';
import {
  MyComment,
  MyCommentForm,
  MyCommentInput,
  MyCommentSubmitBtn,
  Emoji,
} from '../style/PublishComment.style';

const PublishComment = () => {
  const [input, setInput] = React.useState('');
  const onInputChange = evt => setInput(evt.target.value);
  return (
    <MyComment>
      <Emoji />
      <MyCommentForm>
        <MyCommentInput
          placeholder="Add a comment..."
          id="my-comment"
          name="my-comment"
          type="text"
          onChange={onInputChange}
          value={input}
        />
        <MyCommentSubmitBtn disabled={input.length === 0} type="submit">
          Publish
        </MyCommentSubmitBtn>
      </MyCommentForm>
    </MyComment>
  );
};

export default PublishComment;
