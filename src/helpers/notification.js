import toast from 'react-hot-toast'

const notify = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  emoji: (message, icon) => toast(message, { icon }),
}

export default notify
