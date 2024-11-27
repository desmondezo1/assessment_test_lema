const { getUsers, getUserPosts } = require('../../services/v1/user.service');

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
        const { id } = req.params; 
        const { limit, offset } = req.pagination;
        const posts = await getUserPosts(id, limit, offset);

        if (posts.total === 0) {
            return res.status(404).json({ message: 'No posts found for this user' });
        }

        res.status(200).json(posts);
    } catch (err) {
        next(err);
    }
};


module.exports = { listUsers, listUserPosts };
