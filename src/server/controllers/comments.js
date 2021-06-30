import Comment from '../models/comment'
import User from '../models/user'

export const createComment = async (req, res) => {
  const { content, postId } = req.body
  const { userId } = req.user

  try {
    const commentStored = await new Comment({
      content,
      postId,
      userId,
    }).save()
    return res.status(201).json({ comment: commentStored })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

export const getAllCommentsForAPost = async (req, res) => {
  const { postId } = req.params

  try {
    const rawComments = await Comment.find({ postId })
    if (rawComments.length === 0) return res.json({ comments: rawComments })

    const comments = await Promise.allSettled(
      rawComments.map(async (comment) => {
        const { userId, _id, createdAt, content, hearts } = comment
        const user = await User.findOne({ _id: userId })
        return {
          content,
          createdAt,
          hearts,
          _id,
          user: {
            _id: userId,
            displayname: user ? user.displayname : null,
          },
        }
      })
    )

    return res.json({ comments })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
