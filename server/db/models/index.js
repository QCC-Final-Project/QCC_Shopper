const Item = require('./item');
const User = require('./user');
const Order = require('./order');

//associations
Order.belongsTo(User);
Order.hasMany(Items);
User.hasMany(Order);

module.exports = { Item, User, Order };