import express from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts';
import authenticateToken from '../middleware/auth';

const router = express.Router();

router.post('/', authenticateToken, createPost);
router.get('/:_id?', authenticateToken, getPosts);
router.patch('/:_id', authenticateToken, updatePost);
router.delete('/:_id', authenticateToken, deletePost);

export default router;
