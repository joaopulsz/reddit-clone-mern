const Comment = require('../models/Comment');

const createNewComment = async (req, res) => {
    const comment = new Comment({
        post: req.body.post,
        user: req.body.user,
        body: req.body.body,
        likes: 0
    })
    try {
        const newComment = await comment.save();
        res.json(newComment);
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const deleteCommentById = async (req, res) => {
    const commentId = req.params.id;
    try {
        const comment = await Comment.findById(commentId);
        comment.remove();
        res.status(410).json();
    } catch (err) {
        res.status(404).json({
            message: 'Comment not found'
        })
    }
}

module.exports = {createNewComment, deleteCommentById}