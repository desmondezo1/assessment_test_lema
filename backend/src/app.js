const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/v1/user.routes');
const postRoutes = require('./routes/v1/post.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes);

app.use(errorHandler);

module.exports = app;
