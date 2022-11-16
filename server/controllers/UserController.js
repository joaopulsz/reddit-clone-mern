const User = require('../models/User');

// TODO: register & login

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        res.json(user);
    } catch (err) {
        res.status(404).json({
            message: 'User not found'
        })
    }
}

const getPostsByUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const posts = await User.findById(userId).populate('posts');
        res.json(posts);
    } catch (err) {
        res.status(404).json({
            message: 'User not found'
        })
    }
}

const getCommentsByUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const comments = await User.findById(userId).populate('comments');
        res.json(comments);
    } catch (err) {
        res.status(404).json({
            message: 'User not found'
        })
    }
}

const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        user.remove();
        res.status(410).json();
    } catch (err) {
        res.status(404).json({
            message: 'User not found'
        })
    }
}

module.exports = {getAllUsers, getUserById, getPostsByUser, getCommentsByUser, deleteUserById}