import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const authenticateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(' ')[1];
  if (!token) res.status(401).json({ error: 'No token provided' });
  else {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(403).json({
          error: 'Invalid request!',
        });
      } else {
        const user = decodedToken;
        req.user = user;
        next();
      }
    });
  }
};

export default authenticateToken;
