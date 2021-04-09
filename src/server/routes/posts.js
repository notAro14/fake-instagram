import express from 'express';

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts';
import authenticateToken from '../middleware/auth';
import uploadImages from '../middleware/upload';

const router = express.Router();

router.post('/', authenticateToken, uploadImages, createPost);
router.get('/:_id?', authenticateToken, getPosts);
router.patch('/:_id', authenticateToken, uploadImages, updatePost);
router.delete('/:_id', authenticateToken, deletePost);

export default router;
