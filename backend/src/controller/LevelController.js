const connection = require('../database/connection')

module.exports = {
  async index (req, res) {
    try {
      const levels = await connection('level').select()

      return res.status(200).json(levels)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
