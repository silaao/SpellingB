const express = require('express')

const authMiddleware = require('./middleware/auth')

const TeacherController = require('./controller/TeacherController')
const LevelController = require('./controller/LevelController')
const WordController = require('./controller/WordController')
const GameController = require('./controller/GameController')
const PlayerController = require('./controller/PlayerController')

const routes = express.Router()

// Public Routes

routes.post('/teachers', TeacherController.create)
routes.post('/auth', TeacherController.auth)
routes.post('/join/:id', PlayerController.create)

// Private Routes

routes.use(authMiddleware)

routes.get('/teacher', TeacherController.show)
routes.put('/teacher', TeacherController.update)
routes.delete('/teacher', TeacherController.delete)

routes.get('/levels', LevelController.index)
routes.get('/:id/words', WordController.index)

routes.get('/games', GameController.index)
routes.post('/:id/game', GameController.create)

routes.get('/players/:id', PlayerController.index)

module.exports = routes
