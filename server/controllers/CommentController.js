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

module.exports = {createNewComment}