const { QueryTypes } = require('sequelize');
const sequelize = require('../config/database');

const deletePost = async (id) => {
    const result = await sequelize.query(
        `DELETE FROM posts WHERE id = :id`,
        { type: QueryTypes.DELETE, replacements: { id } }
    );

    if (!result) throw new Error('Post not found');
    return { message: 'Post deleted successfully' };
};

module.exports = { deletePost };
