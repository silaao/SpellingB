const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {

  async index (req, res) {
    try {
      const games = await connection('game')
        .select()

      return res.status(200).json(games)
    } catch (error) {
      return res.status(500).json(error)
    }
  },

  async create (req, res) {
    try {
      const { id } = req.params
      const { teacher } = req.headers

      const gameForTeacherExist = await connection('game')
        .where('teacher_id', teacher)
        .andWhere('active', '=', true)
        .first()

      if (gameForTeacherExist) {
        return res.status(302).json({
          message: 'There is still an active game in your account, close it.',
          game: gameForTeacherExist.id
        })
      }

      const uniqueId = generateUniqueId()

      const trx = await connection.transaction()
      await trx('game').insert({
        id: uniqueId,
        level_id: id,
        teacher_id: teacher
      })

      const game = await trx('game')
        .where('id', uniqueId)
        .first()

      await trx.commit()

      return res.status(201).json(game)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
