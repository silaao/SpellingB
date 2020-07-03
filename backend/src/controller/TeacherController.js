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
      const teacher = await connection('teacher').where('id', id).first()

      if (!teacher) { return res.status(404).json('Teacher Not Found') }

      return res.status(200).json(teacher)
    } catch (error) {
      return res.status(409).json(error)
    }
  },

  async create (req, res) {
    const { name, username, password } = req.body

    try {
      const teacherUsernameExist = await connection('teacher')
        .where('username', username)
        .first()

      if (teacherUsernameExist) {
        return res.status(409).json({
          message: `The username ${teacherUsernameExist.username} already exists`,
          key: teacherUsernameExist.username
        })
      }

      const [teacherId] = await connection('teacher')
        .insert({ name, username, password })

      return res.status(200).json({ id: teacherId })
    } catch (error) {
      return res.status(409).json(error)
    }
  },

  async update (req, res) {
    const { id } = req.params
    const { name, username, password } = req.body

    const teacherSearch = await connection('teacher')
      .where('id', id)
      .first()

    if (!teacherSearch) { return res.status(404).json('Teacher not found') }

    try {
      await connection('teacher')
        .where('id', id)
        .update({ name, username, password })

      const teacher = await connection('teacher').where('id', id).first()

      return res.status(200).json(teacher)
    } catch (error) {
      return res.status(409).json(error)
    }
  },

  async delete (req, res) {
    const { id } = req.params

    try {
      await connection('teacher').where('id', id).del()

      return res.status(204).send()
    } catch (error) {
      return res.status(444).json({ message: 'Something wrong was happening', error: error })
    }
  }
}
