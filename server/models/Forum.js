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
    members: [{
        type: Schema.ObjectId, ref: "User"
    }],
    posts: [{
        type: Schema.ObjectId, ref: "Post"
    }]
});

const Forum = mongoose.model('Forum', forumSchema);

/*
    Dummy data:
    Forum.insertMany([
        {title: 'Football', description: "A place for all football fans.", members: [], posts: []},
        {title: 'Gaming', description: "Gamers of the world, unite!", members: [], posts: []},
        {title: 'Programming', description: "All things code.", members: [], posts: []},
        {title: 'Music', description: "Let's talk about music.", members: [], posts: []},
        {title: 'Tennis', description: "Rackets ready.", members: [], posts: []},
        {title: 'Books', description: "A place to discuss and recommend books.", members: [], posts: []},
        {title: 'Science', description: "Anything scientific.", members: [], posts: []},
        {title: 'Politics', description: "Left, right, or center?", members: [], posts: []}
    ])
*/

module.exports = Forum;