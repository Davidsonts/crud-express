const express = require('express')

const routes = express.Router()
const animals = require('../controllers/animals.controller')

routes.get('/', animals.index)
routes.post('/', animals.create)
routes.get('/:id', animals.show)
routes.put('/:id', animals.update)
routes.delete('/:id', animals.destroy)

module.exports = routes