const Post = require('../../models/post.model');
const AppError = require('../../utils/AppError');

const getAllPosts = async (limit, offset) => {

    try {
        const { count, rows } = await Post.findAndCountAll({
            include: { model: require('../../models/user.model'), as: 'user', attributes: ['name'] },
            limit,
            offset,
        });
    
        return { total: count, posts: rows };
    } catch (error) {
        console.log(error.message);
        throw new AppError('Failed to fetch posts', 500);
    }

};

const deletePost = async (postId) => {
    try {
        const post = await Post.findByPk(postId);

        if (!post) {
            throw new AppError('Post not found', 404);
        }

        await post.destroy();
        return { message: 'Post deleted successfully' };
    } catch (err) {
        throw new AppError(err.message || 'Failed to delete post', 500);
    }
};

module.exports = { getAllPosts, deletePost };
