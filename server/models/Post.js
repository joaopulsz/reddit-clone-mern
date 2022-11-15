const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    forum: {
        type: Schema.ObjectId, ref: "Forum",
        required: true
    },
    user: {
        type: Schema.ObjectId, ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    comments: [{
        type: Schema.ObjectId, ref: "Comment"
    }]
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;