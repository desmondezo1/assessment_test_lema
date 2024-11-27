const { deletePost } = require('../../services/v1/post.service');

const listAllPosts = async (req, res, next) => {
  try {
      const { limit, offset } = req.pagination;
      const posts = await getAllPosts(limit, offset);
      res.status(200).json(posts);
  } catch (err) {
      next(err);
  }
};


const removePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deletePost(id);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = { listAllPosts, removePost };
