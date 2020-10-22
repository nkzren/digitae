const jwt = require('jsonwebtoken')
const { API_KEY } = require('./env')

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization
  jwt.verify(token, API_KEY, (error, _) => {
    if (error) {
      res.json('Wrong token provided')
    } else {
      next();
    }
  })
}

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_KEY);
    return decoded;
  } catch (err) {
    return false;
  }
}

const authController = {
  login: async (req, res, next) => {
    const { username } = req.body;

    if (!username) {
      res.sendStatus(400)
    } else {
      res.send(`Hello, ${username}`)
    }
  },

  register: async (req, res, next) => {

  }
}

module.exports = {
  authenticateToken,
  verifyToken,
  authController
}