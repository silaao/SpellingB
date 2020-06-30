const connection = require('../database/connection')

module.exports = {
  async index (req, res) {
    try {
      const { id } = req.params

      const gameExist = await connection('Game')
        .where('id', id)
        .first()

      if (!gameExist) { return res.status(404).json('Game Room not found') }

      const players = await connection('player')
        .where('game_id', gameExist.id)
        .select()

      return res.status(200).json({
        GameRoom: gameExist,
        players: players
      })
    } catch (error) {
      return res.status(500).json(error)
    }
  },

  async create (req, res) {
    try {
      const { id } = req.params
      const { name } = req.body

      const gameExist = await connection('Game')
        .where('id', id)
        .first()

      if (!gameExist) { return res.status(404).json('Game Room not found') }

      const [player] = await connection('player')
        .insert({
          name,
          game_id: gameExist.id
        })

      return res.status(200).json({ player: player })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
