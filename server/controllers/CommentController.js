const Comment = require('../models/Comment');

const createNewComment = async (req, res) => {
    const comment = new Comment({
        post: req.body.post,
        user: req.body.user,
        body: req.body.body,
        likes: 0
    })
}

module.exports = createNewComment