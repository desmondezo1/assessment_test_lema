const { deletePost, getAllPosts } = require('../../services/v1/post.service');
const ApiResponse = require('../../utils/apiResponse');


const listAllPosts = async (req, res, next) => {
    try {
        const { limit, offset, page } = req.pagination;
        const posts = await getAllPosts(limit, offset);

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


const removePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deletePost(id);
        return res.status(200).json(ApiResponse.success(result, 'Post deleted successfully'));
    } catch (err) {
        const statusCode = err.statusCode || 500;
        return res.status(statusCode).json(ApiResponse.error(err.message, statusCode));
    }
};


module.exports = { listAllPosts, removePost };
