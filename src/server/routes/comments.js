import express from 'express'

import authenticateToken from '../middleware/auth'
import { createComment, getAllCommentsForAPost } from '../controllers/comments'

const router = express.Router()

router.post('/', authenticateToken, createComment)
router.get('/:postId', authenticateToken, getAllCommentsForAPost)
router.patch('/:commentId', authenticateToken, () => {})

export default router
