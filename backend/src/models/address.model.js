const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define(
    'address',
    {
        id: {
            type: DataTypes.TEXT,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.TEXT,
            field: 'user_id',
        },
        street: DataTypes.TEXT,
        state: DataTypes.TEXT,
        city: DataTypes.TEXT,
        zipcode: DataTypes.TEXT,
    },
    { timestamps: false }
);

module.exports = Address;
