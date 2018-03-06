const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tableName: 'users',
  timestamps: false
})


module.exports = User
