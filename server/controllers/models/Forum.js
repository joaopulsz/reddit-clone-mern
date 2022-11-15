const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subscribers: [{
        type: Schema.ObjectId, ref: "User"
    }],
    posts: [{
        type: Schema.ObjectId, ref: "Post"
    }]
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;