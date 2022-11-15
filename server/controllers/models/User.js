const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    karma: {
        type: Number,
        required: false
    },
    posts: [{
        type: Schema.ObjectId, ref: "Post"
    }],
    comments: [{
        type: Schema.ObjectId, ref: "Comment"
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;