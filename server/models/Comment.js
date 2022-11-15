const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    post: {
        type: Schema.ObjectId, ref: "Post",
        required: true
    },
    user: {
        type: Schema.ObjectId, ref: "User",
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    }
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;