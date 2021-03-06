const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = require('./models')
db.sequelize.sync()

const routes = require('./routes')
app.use('/', routes)

app.listen(3000)