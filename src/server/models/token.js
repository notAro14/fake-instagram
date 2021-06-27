import { Schema, model, Types } from 'mongoose'

const tokenSchema = new Schema({
  refreshToken: { type: String, required: true },
  userId: { type: Types.ObjectId, required: true },
})

const Token = model('Token', tokenSchema)

export default Token
