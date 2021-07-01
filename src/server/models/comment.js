import mongoose from 'mongoose'

const { Schema, model, Types } = mongoose

const commentSchema = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  hearts: { type: [Types.ObjectId], default: [] },
  postId: { type: Types.ObjectId, required: true },
  userId: { type: Types.ObjectId, required: true },
})

const Comment = model('Comment', commentSchema)

export default Comment
