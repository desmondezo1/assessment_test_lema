const express = require('express');
const { listUsers, listUserPosts } = require('../../controllers/v1/user.controller');
const paginateResults = require('../../middlewares/paginateResults');
// I will add the auth to protect the routes in the future const authenticate = require('../../middlewares/authenticate');


const router = express.Router();

router.get('/', paginateResults, listUsers);
router.get('/:id/posts', paginateResults, listUserPosts);

module.exports = router;
