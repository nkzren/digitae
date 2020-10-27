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

router.get('/players', (_request, res, _next) => {
  const players = getPlayersList()
  res.json(players)
})

router.post('/players/add', (request, res, _next) => {
  console.log(request.body.name)
  const players = addPlayer(request.body.name)
  res.json(players)
})

router.post('/players/rm', (request, res, _next) => {
  console.log(request.body.id)
  const players = removePlayer(request.body.id)
  res.json(players)
})

router.post('/auth/login', authController.login)

module.exports = router