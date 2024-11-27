const Post = require('../../models/post.model');
const { User, Address } = require('../../models');

const AppError = require('../../utils/AppError');

const getUsers = async (limit, offset) => {
  try {

    const { count, rows } = await User.findAndCountAll({
      include: [{
        model: Address,
        as: 'address',
       }],
      limit,
      offset,
  });

  return { total: count, users: rows };

  } catch (error) {
    console.log(error.message)
    throw new AppError('Failed to fetch users', 500);
  }

};

const getUserPosts = async (userId, limit, offset) => {
    try {
        const { count, rows } = await Post.findAndCountAll({
            where: { userId },
            limit,
            offset,
        });

        if (count === 0) {
            throw new AppError('No posts found for this user', 404);
        }

        return { total: count, posts: rows };
    } catch (err) {
        throw new AppError(err.message || 'Failed to fetch user posts', 500);
    }
};



module.exports = { getUsers, getUserPosts };
