const User = require('../models/User');
const bcrypt = require("bcryptjs");

const register = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) {
            res.status(500).json({
                message: err.message
            })
        }
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
            .then(user => {
                res.status(201).json(user)
            })
            .catch(error => {
                res.json({
                    message: 'An error occured.'
                })
            })
    })
}

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ $or: [{ email: username }, { username: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.status(500).json({
                            message: err.message
                        })
                    }
                    if (result) {
                        res.status(200).json(user)
                    } else {
                        res.status(401).json({
                            message: "Password does not match."
                        })
                    }
                })
            } else {
                res.status(404).json({
                    message: 'No user found.'
                })
            }
        })
}

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

module.exports = {register, login, getAllUsers, getUserById, getPostsByUser, getCommentsByUser, deleteUserById}