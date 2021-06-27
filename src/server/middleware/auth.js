import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const { JWT_SECRET } = process.env

const authenticateToken = (req, res, next) => {
  const { authorization } = req.headers
  const token = authorization && authorization.split(' ')[1]
  // const { token } = req.cookies;
  if (!token)
    res.status(403).json({
      error: 'Token not found!',
    })
  else {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(403).json({
          error: 'Invalid token!',
        })
      } else {
        const user = decodedToken
        req.user = user
        next()
      }
    })
  }
}

export default authenticateToken
