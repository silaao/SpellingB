const connection = require('../database/connection')

module.exports = {
  async index (req, res) {
    try {
      const teachers = await connection('teacher').select()
      return res.status(200).json(teachers)
    } catch (error) {
      return res.status(500).json(error)
    }
  },

  async show (req, res) {
    const { id } = req.params

    try {
      const [teacher] = await connection('teacher').where('id', id).select()

      if (!teacher) { return res.status(404).json('Teacher Not Found') }

      return res.status(200).json(teacher)
    } catch (error) {
      return res.status(409).json(error)
    }
  }
}
