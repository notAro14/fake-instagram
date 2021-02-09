const express = require('express');
const { getPosts } = require('../controllers/posts.js');

const router = express.Router();

router.get('/', getPosts);

module.exports = router;
