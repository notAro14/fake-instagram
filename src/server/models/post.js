import mongoose from 'mongoose'

const { Schema, model } = mongoose

const postSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, required: true },
  description: { type: String, required: true },
  hearts: { type: Number, default: 0 },
  image: String,
  title: { type: String, required: true },
})

const Post = model('Post', postSchema)

export default Post
