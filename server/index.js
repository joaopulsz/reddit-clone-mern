const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/redditclone');
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.listen(port, () => console.log(`Server is running on port ${port}`));

const UserRoutes = require('./routes/UserRoutes');
app.use('/', UserRoutes);
const ForumRoutes = require('./routes/ForumRoutes');
app.use('/', ForumRoutes);
const PostRoutes = require('./routes/PostRoutes');
app.use('/', PostRoutes);
const CommentRoutes = require('./routes/CommentRoutes');
app.use('/', CommentRoutes);