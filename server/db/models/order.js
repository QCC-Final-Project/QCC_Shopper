const Sequelize = require('sequelize');
const db = require('../db');

//create Order table
const Order = db.define('order', {
    status: {
        type: Sequelize.ENUM('pending', 'fulfilled'),
        allowNull: false
    }
});

module.exports = Order;