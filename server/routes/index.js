const router = require('express').Router()
const { authController } = require('../auth')
const { getRandomQuote } = require('../quotes')

router.get('/', (_req, res, next) => {
  res.send('index')
})

router.get('/quote', (_request, res, _next) => {
  const quote = getRandomQuote()
  if (quote.source && quote.text) {
    res.json(quote)
  } else {
    res.statusCode(404)
  }
})

router.get('/players', (_request, response, _next) => {
  response.json({test1: 'lalala', test2: 'lalala'})
})

router.post('/auth/login', authController.login)

module.exports = router