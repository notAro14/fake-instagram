import express from 'express';
import {
  getPosts,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
} from '../controllers/posts';

const router = express.Router();

router.get('/', getPosts);
router.get('/:_id', getOnePost);
router.patch('/:_id', updatePost);
router.delete('/:_id', deletePost);
router.post('/', createPost);

export default router;
