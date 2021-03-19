import express from 'express';
import { getPosts, createPost, getOnePost } from '../controllers/posts';

const router = express.Router();

router.get('/', getPosts);
router.get('/:_id', getOnePost);
router.post('/', createPost);

export default router;
