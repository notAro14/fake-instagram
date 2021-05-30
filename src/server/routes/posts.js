import express from 'express'

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts'
import authenticateToken from '../middleware/auth'
import upload from '../middleware/upload'

const router = express.Router()

router.post('/', authenticateToken, upload, createPost)
router.get('/:_id?', authenticateToken, getPosts)
router.patch('/:_id', authenticateToken, upload, updatePost)
router.patch('/like/:_id', authenticateToken, likePost)
router.delete('/:_id', authenticateToken, deletePost)

export default router
