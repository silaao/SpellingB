const express = require('express')

const TeacherController = require('./controller/TeacherController')

const routes = express.Router()

routes.get('/teachers', TeacherController.index)
routes.post('/teachers', TeacherController.create)
routes.put('/teachers/:id', TeacherController.update)
routes.get('/teachers/:id', TeacherController.show)
routes.delete('/teachers/:id', TeacherController.delete)

module.exports = routes
