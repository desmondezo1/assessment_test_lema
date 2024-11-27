const Post = require('../../models/post.model');
const AppError = require('../../utils/AppError');

const getAllPosts = async (limit, offset) => {
    const { count, rows } = await Post.findAndCountAll({
        include: { model: require('../models/user.model'), as: 'user', attributes: ['name'] },
        limit,
        offset,
    });

    return { total: count, posts: rows };
};

const deletePost = async (postId) => {
    const post = await Post.findByPk(postId);

    if (!post) {
        throw new AppError('Post not found', 404);
    }

    await post.destroy();
    return { message: 'Post deleted successfully' };
};

module.exports = { getAllPosts, deletePost };
