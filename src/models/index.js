const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:F1234Cytu@0.0.0.0:5432/teste2')

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.animals = require('../models/animal.model')(sequelize, Sequelize)

module.exports = db