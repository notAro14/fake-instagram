import mongoose from 'mongoose'

const { Schema, model, Types } = mongoose

const postSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  description: { type: String, required: true },
  hearts: { type: [String], default: [] },
  image: String,
  title: { type: String, required: true },
  userId: { type: Types.ObjectId, required: true },
})

const Post = model('Post', postSchema)

export default Post
