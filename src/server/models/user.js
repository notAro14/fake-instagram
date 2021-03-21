import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  displayname: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

const User = model('User', userSchema);

export default User;
