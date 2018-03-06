const Sequelize = require('sequelize')
const sequelize = require('../db')

const Users = sequelize.define('users', {
  info: {
    type: Sequelize.JSON,
    allowNull: false
}, {
  tableName: 'users',
  timestamps: false
})


module.exports = Users
