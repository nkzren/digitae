const router = require('express').Router()
const { authController } = require('../auth')

router.get('/', (req, res, next) => {
  res.send('index')
})

router.post('/auth/login', authController.login)

module.exports = router