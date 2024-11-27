const express = require('express');
const { listAllPosts, removePost } = require('../../controllers/v1/post.controller');
const paginateResults = require('../../middlewares/paginateResults');

const router = express.Router();

router.get('/', paginateResults, listAllPosts);
router.delete('/:id', removePost);

module.exports = router;
