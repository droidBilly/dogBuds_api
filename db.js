var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/postgres')

module.exports = sequelize
