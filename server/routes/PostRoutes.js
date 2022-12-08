const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');

router.get('/posts/search', PostController.getPostsByQuery);
router.post('/posts', PostController.createNewPost);
router.get('/posts/:id/comments', PostController.getCommentsByPost);
router.delete('/post/:id', PostController.deletePostById);

module.exports = router;