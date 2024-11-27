const { getUsers, getUserPosts } = require('../services/user.service');

const listUsers = async (req, res, next) => {
    try {
        const { limit, offset } = req.pagination;
        const users = await getUsers(limit, offset);
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

const listUserPosts = async (req, res, next) => {
    try {
        const { limit, offset } = req.pagination;
        const { id } = req.params;
        const posts = await getUserPosts(id, limit, offset);
        res.status(200).json(posts);
    } catch (err) {
        next(err);
    }
};

module.exports = { listUsers, listUserPosts };
