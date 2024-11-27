const express = require('express');
const { removePost } = require('../controllers/post.controller');

const router = express.Router();

router.delete('/:id', removePost);

module.exports = router;
