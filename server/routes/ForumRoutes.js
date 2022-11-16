const express = require('express');
const router = express.Router();

const ForumController = require('../controllers/ForumController');

router.get('/forums', ForumController.getAllForums);
router.post('/forums', ForumController.createNewForum);
router.get('/forums/:id', ForumController.getForumById);
router.get('/forums/:id/posts', ForumController.getPostsByForum);
router.get('/forums/:id/members', ForumController.getMembersByForum);
router.delete('/forums/:id', ForumController.deleteForumById);

module.exports = router;