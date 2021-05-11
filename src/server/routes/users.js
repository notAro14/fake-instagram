import express from 'express'
import { signup, login, verifyUser, getUsers } from '../controllers/users'
import authenticateToken from '../middleware/auth'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/verify', authenticateToken, verifyUser)
router.get('/profiles/:_id?', authenticateToken, getUsers)

export default router
