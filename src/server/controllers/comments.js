import { Types } from 'mongoose'
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
    const rawComments = await Comment.find({ postId }).exec()

    if (!rawComments)
      return res.status(400).json({ error: 'Comment not found' })
    if (rawComments.length === 0) return res.json({ comments: rawComments })

    const comments = await Promise.allSettled(
      rawComments.map(async (comment) => {
        const { userId, _id, createdAt, content, hearts } = comment
        const user = await User.findById(userId)
        return {
          content,
          createdAt,
          hearts,
          _id,
          user: {
            _id: userId,
            username: user ? user.username : null,
          },
        }
      })
    )

    return res.json({ comments })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

export const likeComment = async (req, res) => {
  const { commentId } = req.params
  const { userId } = req.user
  try {
    const comment = await Comment.findById(commentId).exec()
    if (!comment)
      return res.status(404).json({ error: 'Like failed: comment not found' })
    if (comment.hearts.includes(userId)) {
      const savedComment = await Comment.updateOne(
        { _id: commentId },
        { $pull: { hearts: Types.ObjectId(userId) } }
      )
      return res.json({ comment: savedComment, action: 'unlike' })
    }
    const savedComment = await Comment.updateOne(
      { _id: commentId },
      { $push: { hearts: Types.ObjectId(userId) } }
    )
    return res.json({ comment: savedComment, action: 'like' })
  } catch (error) {
    try {
      return res.status(500).json({ error: error.message })
    } catch (unLikeError) {
      return res.status(500).json({ error: unLikeError.message })
    }
  }
}
