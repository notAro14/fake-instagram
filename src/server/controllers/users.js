import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const signup = async (req, res) => {
  const saltRounds = 10;
  const { email, displayname, username, password } = req.body;
  try {
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
    res.status(201).json({
      user: {
        ...userInfo,
        token: jwt.sign(userInfo, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }),
      },
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res
      .status(401)
      .json({ error: "L'identifiant et/ou le mot de passe sont incorrects" });
  } else {
    const hashedPassword = user.password;
    try {
      const match = await bcrypt.compare(password, hashedPassword);
      if (!match) {
        res.status(401).json({
          error: "L'identifiant et/ou le mot de passe sont incorrects",
        });
      } else {
        const userInfo = {
          userId: user._id,
          email: user.email,
          displayname: user.displayname,
          username: user.username,
        };
        res.json({
          user: {
            ...userInfo,
            token: jwt.sign(userInfo, 'RANDOM_TOKEN_SECRET', {
              expiresIn: '24h',
            }),
          },
        });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
