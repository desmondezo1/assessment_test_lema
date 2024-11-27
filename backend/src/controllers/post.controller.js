const { deletePost } = require('../services/post.service');

const removePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deletePost(id);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = { removePost };
