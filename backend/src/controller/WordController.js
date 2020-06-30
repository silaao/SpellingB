const connection = require('../database/connection')

module.exports = {
  async index (req, res) {
    try {
      const { id } = req.params

      const words = await connection('word')
        .where('level_id', id)
        .select()

      return res.status(200).json(words)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
