import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const { JWT_SECRET } = process.env;

export const signup = async (req, res) => {
  const saltRounds = 10;
  const { email, displayname, username, password } = req.body;
  try {
    const alreadyExistingUser = await User.find({ email });
    if (alreadyExistingUser) {
      return res
        .status(400)
        .send({ error: 'You already have an account. Sign in instead.' });
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
    return res.status(201).json({
      user: {
        ...userInfo,
        token: jwt.sign(userInfo, JWT_SECRET, { expiresIn: '24h' }),
      },
    });
  } catch (error) {
    return res.status(400).json({ error });
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
    return res.json({
      user: {
        ...userInfo,
        token: jwt.sign(userInfo, JWT_SECRET, {
          expiresIn: '24h',
        }),
      },
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
