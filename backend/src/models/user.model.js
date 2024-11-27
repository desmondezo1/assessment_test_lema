const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.TEXT,
            primaryKey: true,
        },
        name: DataTypes.TEXT,
        username: DataTypes.TEXT,
        email: DataTypes.TEXT,
        phone: DataTypes.TEXT,
    },
    { timestamps: false }
);

module.exports = User;
