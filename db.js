var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@192.168.99.100:5432/postgres')

module.exports = sequelize
