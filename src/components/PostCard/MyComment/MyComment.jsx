import React, { useState, forwardRef } from 'react'
import { func, string } from 'prop-types'
import { useMutation, useQueryClient } from 'react-query'
import {
  MyCommentWrapper,
  MyCommentForm,
  MyCommentInput,
  MyCommentSubmitBtn,
  OpenEmojiPickerModal,
} from './MyComment.style'
import EmojiPickerModal from './EmojiPickerModal'
import useEmojiPicker from './useEmojiPicker'
// import { createComment } from '../../../api/comment'

const MyComment = forwardRef((props, ref) => {
  const [input, setInput] = useState('')
  const inputRef = ref
  const onInputChange = (evt) => setInput(evt.target.value)
  const onEmojiSelected = (emoji) => {
    setInput((prev) => prev + emoji.native)
    inputRef.current.focus()
  }
  const { onCreateComment, postId } = props

  const {
    isEmojiPickerOpen,
    onEmojiSelection,
    closeEmojiPicker,
    openEmojiPicker,
  } = useEmojiPicker(onEmojiSelected)

  const queryClient = useQueryClient()
  const commentsMutation = useMutation(onCreateComment, {
    onSettled: () => queryClient.invalidateQueries(['comments', postId]),
  })

  return (
    <MyCommentWrapper>
      <EmojiPickerModal
        isEmojiPickerOpen={isEmojiPickerOpen}
        closeEmojiPicker={closeEmojiPicker}
        onEmojiSelection={onEmojiSelection}
      />
      <OpenEmojiPickerModal onClick={openEmojiPicker} />
      <MyCommentForm
        onSubmit={(evt) => {
          evt.preventDefault()
          commentsMutation.mutate(input)
          setInput('')
        }}
      >
        <MyCommentInput
          placeholder='Add a comment...'
          name='my-comment'
          type='text'
          onChange={onInputChange}
          value={input}
          ref={inputRef}
        />
        <MyCommentSubmitBtn disabled={input.length === 0} type='submit'>
          Publish
        </MyCommentSubmitBtn>
      </MyCommentForm>
    </MyCommentWrapper>
  )
})

MyComment.propTypes = {
  onCreateComment: func.isRequired,
  postId: string.isRequired,
}

export default MyComment
