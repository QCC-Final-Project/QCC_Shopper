const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.adrcdoorcounty.org/wp-content/uploads/2019/05/mystery-person.jpg"
  },
  address: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    //allowNull: false
  }
});

module.exports = User;