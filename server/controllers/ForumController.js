const Forum = require('../models/Forum');

const getAllForums = async (req, res) => {
    try {
        const forums = await Forum.find();
        res.json(forums);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const createNewForum = async (req, res) => {
    const forum = new Forum({
        title: req.body.title,
        description: req.body.description,
        members: [],
        posts: []
    })
    try {
        const newForum = await forum.save();
        res.json(newForum);
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const getForumById = async (req, res) => {
    const forumId = req.params.id;
    try {
        const forum = await Forum.findById(forumId);
        res.json(forum);
    } catch (err) {
        res.status(404).json({
            message: 'Forum not found'
        })
    }
}

const getPostsByForum = async (req, res) => {
    const forumId = req.params.id;
    try {
        const posts = await Forum.findById(forumId).populate('posts');
        res.json(posts);
    } catch (err) {
        res.status(404).json({
            message: 'Forum not found'
        })
    }
}

const getMembersByForum = async (req, res) => {
    const forumId = req.params.id;
    try {
        const members = await Forum.findById(forumId).populate('members');
        res.json(posts);
    } catch (err) {
        res.status(404).json({
            message: 'Forum not found'
        })
    }
}

const deleteForumById = async (req, res) => {
    const forumId = req.params.id;
    try {
        const forum = await Forum.findById(forumId);
        forum.remove();
        res.status(410).json();
    } catch (err) {
        res.status(404).json({
            message: 'Forum not found'
        })
    }
}

module.exports = {getAllForums, createNewForum, getForumById, getPostsByForum, getMembersByForum, deleteForumById}