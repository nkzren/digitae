const router = require('express').Router()
const { authController } = require('../auth')
const { getRandomQuote } = require('../quotes')
const { getPlayersList, addPlayer,  removePlayer} = require ('../players')

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

router.get('/playersList', (_request, res, _next) => {
  const players = getPlayersList()
  res.json(players)
})

router.post('/playersAdd', (_request, res, _next) => {
  const players = addPlayer()
  res.json(players)
})

router.post('/playersRem', (_request, res, _next) => {
  const players = removePlayer()
  res.json(players)
})

router.post('/auth/login', authController.login)

module.exports = router