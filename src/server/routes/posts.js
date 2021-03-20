import express from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts';

const router = express.Router();

router.post('/', createPost);
router.get('/:_id?', getPosts);
router.patch('/:_id', updatePost);
router.delete('/:_id', deletePost);

export default router;
