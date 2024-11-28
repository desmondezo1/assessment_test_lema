const { getUsers, getUserPosts } = require('../../services/v1/user.service');
const ApiResponse = require('../../utils/apiResponse');

const listUsers = async (req, res, next) => {
    try {
        const { limit, offset, page } = req.pagination;
        const users = await getUsers(limit, offset);
        const response = ApiResponse.paginated(users.users, {
            total: users.total,
            currentPage: page,
            totalPages: Math.ceil(users.total / limit),
            limit,
        });
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(ApiResponse.error(err.message));
    }
};

const listUserPosts = async (req, res, next) => {
    try {
        const { id } = req.params; // User ID
        const { limit, offset, page } = req.pagination;
        const posts = await getUserPosts(id, limit, offset);

        if (posts.total === 0) {
            return res.status(404).json(ApiResponse.error('No posts found for this user', 404));
        }

        const response = ApiResponse.paginated(posts.posts, {
            total: posts.total,
            currentPage: page,
            totalPages: Math.ceil(posts.total / limit),
            limit,
        });
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(ApiResponse.error(err.message));
    }
};

module.exports = { listUsers, listUserPosts };
