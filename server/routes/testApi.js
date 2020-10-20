const router = require('express').Router()

router.get('/', function(req, res, next) {
  res.send('API Test OK')
})

module.exports = router