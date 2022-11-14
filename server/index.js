const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost/redditclone'); //TODO: update this to connect to database
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Connected to database'));

app.listen(port, () => console.log(`Server is running on port ${port}`));

const UserRoute = require('./routes/User');
app.use('/', UserRoute);