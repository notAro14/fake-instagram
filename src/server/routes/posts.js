import express from 'express';
import {
  getPosts,
  createPost,
  getOnePost,
  updatePost,
} from '../controllers/posts';

const router = express.Router();

router.get('/', getPosts);
router.get('/:_id', getOnePost);
router.patch('/:_id', updatePost);
router.post('/', createPost);

export default router;
