const Post = require('../models/Post');
const Forum = require('../models/Forum');
const User = require('../models/User');

const getPostsByQuery = async (req, res) => {
    let query = req.query.q;
    //TODO: fix this
    try {
        const posts = await Post.find().populate('forum');
        res.json(posts);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

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
    const user = await User.findById(req.body.user);
    
    try {
        const newPost = await post.save();
        forum.posts.push(post);
        user.posts.push(post);
        await forum.save();
        await user.save();
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

module.exports = {getPostsByQuery, createNewPost, getCommentsByPost, deletePostById}