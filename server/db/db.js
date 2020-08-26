const Sequelize = require('sequelize');
const {dbName, username, password} = require('../../secrets');

const db = new Sequelize(dbName, username, password, {
    dialect: 'postgres',
    logging: false,
});

module.exports = db;