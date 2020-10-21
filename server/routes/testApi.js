const router = require('express').Router()

router.get('/', function(req, res, next) {
  res.send('API GET Test OK')
})

router.post('/', function (req, res) {
  res.send('API POST Test OK');
});

module.exports = router