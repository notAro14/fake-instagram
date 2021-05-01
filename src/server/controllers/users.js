import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/user';

dotenv.config();

const { JWT_SECRET } = process.env;
const TOKEN_EXPIRATION = '24h';

export const verifyUser = async (req, res) => {
  const { user } = req;
  res.status(200).json({ ...user });
};

export const signup = async (req, res) => {
  const saltRounds = 10;
  const { email, displayname, username, password } = req.body;
  try {
    const alreadyExistingUser = await User.find({ email });
    if (alreadyExistingUser.length) {
      return res
        .status(400)
        .send({ error: 'You already have an account. Sign in instead.' });
    }
    const existingUsername = await User.find({ username });
    if (existingUsername.length) {
      return res.status(400).send({
        error: `Username ${username} is already taken. Please choose another one.`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
      email,
      displayname,
      username,
      password: hashedPassword,
    });
    const userSaved = await user.save();
    const userInfo = {
      userId: userSaved._id,
      displayname: userSaved.displayname,
      username: userSaved.username,
      email: userSaved.email,
    };

    const token = jwt.sign(userInfo, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRATION,
    });

    // res.cookie('token', token, { httpOnly: true });
    return res.status(201).json({
      user: {
        ...userInfo,
        token,
      },
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(401)
      .json({ error: 'This email is not linked to any account' });
  }
  const hashedPassword = user.password;
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    if (!match) {
      return res.status(401).json({
        error: 'Incorrect identifiers',
      });
    }
    const userInfo = {
      userId: user._id,
      email: user.email,
      displayname: user.displayname,
      username: user.username,
    };
    const token = jwt.sign(userInfo, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRATION,
    });
    // res.cookie('token', token, { httpOnly: true });
    return res.json({
      user: {
        ...userInfo,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  const { _id } = req.params;
  if (_id) {
    try {
      const docs = await User.findById(_id).exec();
      if (!docs) {
        return res.status(404).json({ error: "User can't be found" });
      }
      return res.json({
        users: [
          {
            _id: docs._id,
            displayname: docs.displayname,
            username: docs.username,
          },
        ],
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  try {
    const docs = await User.find().exec();
    return res.json({
      users: docs.map(doc => ({
        _id: doc._id,
        displayname: doc.displayname,
        username: doc.username,
      })),
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
