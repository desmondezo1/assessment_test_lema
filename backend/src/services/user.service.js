const { QueryTypes } = require('sequelize');
const sequelize = require('../config/database');

const getUsers = async (limit, offset) => {
    const users = await sequelize.query(
        `SELECT users.id, users.name, users.username, users.email, users.phone,
                (addresses.street || ', ' || addresses.state || ', ' || addresses.city || ', ' || addresses.zipcode) AS address
         FROM users
         LEFT JOIN addresses ON users.id = addresses.user_id
         LIMIT :limit OFFSET :offset`,
        { type: QueryTypes.SELECT, replacements: { limit, offset } }
    );

    const totalCount = await sequelize.query(`SELECT COUNT(*) as count FROM users`, {
        type: QueryTypes.SELECT,
    });

    return { total: totalCount[0].count, users };
};

const getUserPosts = async (userId, limit, offset) => {
    const posts = await sequelize.query(
        `SELECT * FROM posts WHERE user_id = :userId LIMIT :limit OFFSET :offset`,
        { type: QueryTypes.SELECT, replacements: { userId, limit, offset } }
    );

    const totalCount = await sequelize.query(
        `SELECT COUNT(*) as count FROM posts WHERE user_id = :userId`,
        { type: QueryTypes.SELECT, replacements: { userId } }
    );

    return { total: totalCount[0].count, posts };
};

module.exports = { getUsers, getUserPosts };
