const Post = require('../models/Post');
const Forum = require('../models/Forum');

const createNewPost = async (req, res) => {
    const post = new Post({
        forum: req.body.forum,
        user: req.body.user,
        title: req.body.title,
        body: req.body.body,
        likes: 0,
        comments: []
    });

    const forum = await Forum.findById(req.body.forum);
    
    try {
        const newPost = await post.save();
        forum.posts.push(post);
        await forum.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getCommentsByPost = async (req, res) => {
    const postId = req.params.id;
    try {
        const comments = await Post.findById(postId).populate('comments');
        res.json(comments);
    } catch (err) {
        res.status(404).json({
            message: 'Post not found'
        })
    }
}

const deletePostById = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Post.findById(postId);
        post.remove();
        res.status(410).json();
    } catch (err) {
        res.status(404).json({
            message: 'Post not found'
        })
    }
}

module.exports = {createNewPost, getCommentsByPost, deletePostById}