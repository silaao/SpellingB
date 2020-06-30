const connection = require('../database/connection')

module.exports = {
  async index (req, res) {
    try {
      const { id } = req.params

      const players = await connection('player')
        .where('game_id', id)
        .select()

      return res.status(200).json(players)
    } catch (error) {
      return res.status(500).json(error)
    }
  },

  async create (req, res) {
    try {
      const { id } = req.params
      const { name } = req.body

      const [player] = await connection('player')
        .insert({
          name,
          game_id: id
        })

      return res.status(200).json({ player: player })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
