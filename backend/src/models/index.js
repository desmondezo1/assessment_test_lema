const User = require('./user.model');
const Address = require('./address.model');

// Define Associations
User.hasOne(Address, { foreignKey: 'userId', as: 'address' });
Address.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = {
    User,
    Address,
};
