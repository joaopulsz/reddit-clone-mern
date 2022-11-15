const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');

router.post('/posts', PostController.createNewPost);
router.get('/posts/:id/comments', PostController.getCommentsByPost);
router.get('/posts/:id/likes', PostController.getLikesByPost);
router.delete('/post/:id', PostController.deletePostById);

module.exports = router;