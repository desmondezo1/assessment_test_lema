const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const Post = sequelize.define(
    'post', 
    {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.TEXT,
        field: 'user_id',
    },
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    createdAt: {
        type: DataTypes.TEXT,
        field: 'created_at',
    },
}, { timestamps: false });

Post.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

module.exports = Post;
