const express = require('express');
const router = express.Router();

const CommentController = require('../controllers/CommentController');

router.post('/comments', CommentController.createNewComment);
router.delete('/comments/:id', CommentController.deleteCommentById);

module.exports = router;