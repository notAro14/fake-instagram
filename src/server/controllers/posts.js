import fs from 'fs'
import Post from '../models/post'

// CREATE
export const createPost = async (req, res) => {
  const post = req.body
  const { userId } = req.user
  try {
    const savedPost = await new Post({
      ...post,
      userId,
      image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    }).save()
    res.status(201).json({ post: savedPost })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
// GET
export const getPosts = async (req, res) => {
  const { _id } = req.params
  if (_id) {
    try {
      const docs = await Post.findById(_id).exec()
      if (!docs) {
        return res.status(404).json({ error: 'Request failed: post not found' })
      }
      return res.json({
        posts: [docs],
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  try {
    const docs = await Post.find().sort({ createdAt: -1 }).exec()
    return res.json({
      posts: docs,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
// UPDATE
export const updatePost = async (req, res) => {
  const { _id } = req.params
  const { title, description } = req.body
  const { file } = req

  try {
    const post = await Post.findById(_id).exec()
    if (!post)
      return res.status(404).json({ error: 'Update failed: post not found' })
    if (file) {
      const [, filename] = post.image.split('/images/')
      fs.unlinkSync(`tmp/images/${filename}`)
      post.image = `${req.protocol}://${req.get('host')}/images/${
        file.filename
      }`
    }
    post.title = title || post.title
    post.description = description || post.description
    const savedPost = await post.save()
    return res.json({ post: savedPost })
  } catch (error) {
    try {
      // remove already uploaded new image if there is an error during updating
      if (file) {
        fs.unlinkSync(`tmp/images/${file.filename}`)
      }
      return res.status(500).json({ error: error.message })
    } catch (unlinkError) {
      return res.status(500).json({ error: unlinkError.message })
    }
  }
}

export const likePost = async (req, res) => {
  const { _id } = req.params
  const { userId } = req.user
  try {
    const post = await Post.findById(_id).exec()
    if (!post)
      return res.status(404).json({ error: 'Like failed: post not found' })
    let action
    if (post.hearts.includes(userId)) {
      post.hearts = post.hearts.filter((heart) => heart !== userId)
      action = 'unlike'
    } else {
      post.hearts.push(userId)
      action = 'like'
    }
    const savedPost = await post.save()
    return res.json({ post: savedPost, action })
  } catch (error) {
    try {
      return res.status(500).json({ error: error.message })
    } catch (unlinkError) {
      return res.status(500).json({ error: unlinkError.message })
    }
  }
}
// DELETE
export const deletePost = async (req, res) => {
  const { _id } = req.params

  try {
    const post = await Post.findById(_id).exec()
    if (!post)
      return res.status(404).json({ error: 'Delete failed: post not found' })

    const [, filename] = post.image.split('/images/')
    fs.unlinkSync(`tmp/images/${filename}`)
    const message = await post.remove()
    return res.json({ message })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
