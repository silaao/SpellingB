const express = require('express')

const TeacherController = require('./controller/TeacherController')
const LevelController = require('./controller/LevelController')
const WordController = require('./controller/WordController')
const GameController = require('./controller/GameController')
const PlayerController = require('./controller/PlayerController')

const routes = express.Router()

routes.get('/teachers', TeacherController.index)
routes.post('/teachers', TeacherController.create)
routes.put('/teachers/:id', TeacherController.update)
routes.get('/teachers/:id', TeacherController.show)
routes.delete('/teachers/:id', TeacherController.delete)

routes.get('/levels', LevelController.index)

routes.get('/:id/words', WordController.index)

routes.get('/games', GameController.index) /* Lista jogos existentes */
routes.post('/:id/game', GameController.create) /* Cria uma sala de Jogo */

routes.post('/join/:id', PlayerController.create) /* Aluno entra em uma sala de jogo */
routes.get('/players/:id', PlayerController.index) /* Alunos em uma sala de jogo */

module.exports = routes
