const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('index')
})

router.post('/createRoom', (req, res, next) => {
    req.body.roomName
})

module.exports = router