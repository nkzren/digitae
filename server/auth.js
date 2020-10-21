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

module.exports = {
  authenticateToken,
  verifyToken
}