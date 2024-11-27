const Post = require('../../models/post.model');
const User = require('../../models/user.model');

const getUsers = async (limit, offset) => {
  const { count, rows } = await User.findAndCountAll({
      include: [{ model: Address }],
      limit,
      offset,
  });

  return { total: count, users: rows };
};

const getUserPosts = async (userId, limit, offset) => {
  const { count, rows } = await Post.findAndCountAll({
      where: { userId },
      limit,
      offset,
  });

  return { total: count, posts: rows };
};


module.exports = { getUsers, getUserPosts };
