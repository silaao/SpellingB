const express = require('express')

const TeacherController = require('./controller/TeacherController')

const routes = express.Router()

routes.get('/teachers', TeacherController.index)
routes.get('/teachers/:id', TeacherController.show)

module.exports = routes
