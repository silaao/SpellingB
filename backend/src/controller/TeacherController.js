const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const connection = require('../database/connection')
const authConfig = require('../config/auth.json')

module.exports = {
  async auth (req, res) {
    try {
      const { username, password } = req.body

      const teacher = await connection('teacher')
        .where('username', username)
        .first()

      if (!teacher) {
        return res.status(401).json({ message: "Teacher's Username is incorrect" })
      }

      if (!(await bcrypt.compare(password, teacher.password))) {
        return res.status(401).json({ message: 'Invalid password' })
      }

      const token = await jwt.sign({ id: teacher.id }, authConfig.secret, {
        expiresIn: 86400
      })

      return res.status(200).json({
        token,
        teacher
      })
    } catch (error) {
      return res.status(409).json(error)
    }
  },

  async show (req, res) {
    const id = req.userId

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
          username: teacherUsernameExist.username
        })
      }

      const hash = await bcrypt.hash(password, 8)

      const [teacherId] = await connection('teacher').insert({ name, username, password: hash })
      const teacher = await connection('teacher').where('id', teacherId).first()

      return res.status(200).json(teacher)
    } catch (error) {
      return res.status(409).json(error)
    }
  },

  async update (req, res) {
    const id = req.userId
    const { name, username, password } = req.body

    const teacherSearch = await connection('teacher')
      .where('id', id)
      .first()

    if (!teacherSearch) { return res.status(404).json('Teacher not found') }

    const usernameExist = await connection('teacher')
      .where('username', username)
      .first()

    if (usernameExist) {
      return res.status(409).json({
        message: `The username ${usernameExist.username} already exists`,
        key: usernameExist.username
      })
    }

    try {
      if (password) {
        const hash = await bcrypt.hash(password, 8)
        await connection('teacher').where('id', id).update({ password: hash })
      }

      await connection('teacher')
        .where('id', id)
        .update({ name, username })

      const teacher = await connection('teacher').where('id', id).first()

      return res.status(200).json(teacher)
    } catch (error) {
      return res.status(409).json(error)
    }
  },

  async delete (req, res) {
    const id = req.userId

    try {
      await connection('teacher').where('id', id).del()

      return res.status(204).send()
    } catch (error) {
      return res.status(444).json({ message: 'Something wrong was happening', error: error })
    }
  }
}
