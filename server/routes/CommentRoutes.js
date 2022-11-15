const express = require('express');
const router = express.Router();

const CommentController = require('../controllers/CommentController');

router.post('/comments', CommentController.createNewComment);

module.exports = router;