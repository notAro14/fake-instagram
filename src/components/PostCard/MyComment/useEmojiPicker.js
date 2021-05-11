import { useState } from 'react'

const useEmojiPicker = (onEmojiSelected) => {
  const [isEmojiPickerOpen, setEmojiPickerState] = useState(false)
  const openEmojiPicker = () => setEmojiPickerState(true)
  const closeEmojiPicker = () => setEmojiPickerState(false)

  const onEmojiSelection = (emoji) => {
    onEmojiSelected(emoji)
    closeEmojiPicker()
  }

  return {
    isEmojiPickerOpen,
    onEmojiSelection,
    closeEmojiPicker,
    openEmojiPicker,
  }
}

export default useEmojiPicker
