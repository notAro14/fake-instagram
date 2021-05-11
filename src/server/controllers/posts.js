import fs from 'fs'
import Post from '../models/post'

export const updatePost = async (req, res) => {
  const { _id } = req.params
  const { title, description } = req.body
  const { file } = req

  try {
    const post = await Post.findById(_id).exec()
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
    res.json({ post: savedPost })
  } catch (error) {
    try {
      // remove already uploaded new image if there is an error during updating
      if (file) {
        fs.unlinkSync(`tmp/images/${file.filename}`)
      }
      res.status(500).json({ error: error.message })
    } catch (unlinkError) {
      res.status(500).json({ error: unlinkError.message })
    }
  }
}

export const getPosts = async (req, res) => {
  const { _id } = req.params
  if (_id) {
    try {
      const docs = await Post.findById(_id).exec()
      if (!docs) {
        return res.status(404).json({ error: "Post can't be found" })
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

export const deletePost = (req, res) => {
  const { _id } = req.params
  Post.findById(_id, (findError, post) => {
    if (findError) {
      res.status(404).json({ error: findError.message })
      return
    }

    const [, filename] = post.image.split('/images/')
    fs.unlink(`tmp/images/${filename}`, (unlinkError) => {
      if (unlinkError) {
        res.status(500).json({ error: unlinkError.message })
        return
      }

      Post.deleteOne({ _id }, (deleteError, message) => {
        if (deleteError) {
          res.status(400).json({ error: deleteError.message })
          return
        }

        res.status(200).json({ message })
      })
    })
  })
}
