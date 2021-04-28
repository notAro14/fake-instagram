import express from 'express';
import { signup, login, verifyUser } from '../controllers/users';
import authenticateToken from '../middleware/auth';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify', authenticateToken, verifyUser);

export default router;
