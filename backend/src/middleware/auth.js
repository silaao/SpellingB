const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const authConfig = require('../config/auth.json')

module.exports = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ message: 'Token not provided' })
  }

  const parts = authorization.split(' ')

  if (!parts.length === 2) {
    return res.status(401).json({ message: 'Token error' })
  }

  const [schema, token] = parts

  if (!/^Bearer$/i.test(schema)) {
    return res.status(401).json({ message: 'Token malformatted' })
  }

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)
    req.userId = decoded.id

    return next()
  } catch (error) {
    return res.status(401).json({ message: 'Token error', error })
  }
}
