const webSocket = require('./websocket')
const express = require('express')
const http = require('http')

// Configure environment
require('dotenv').config()

// Routers
const indexRouter = require('./routes/index')
const testApiRouter = require('./routes/testApi')

const app = express()

// Starting websocket connection
const server = new http.Server(app);
webSocket(server)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', indexRouter)
app.use('/testApi', testApiRouter)

// error handler
app.use((err, req, res, next) => { 
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // Renderiza a pagina de erro
  res.status(err.status || 500)
  res.render('error')
})

const apiPort = process.env.API_PORT
app.listen(apiPort, () => console.log(`Listening on port ${apiPort}`))

const webSocketPort = process.env.WEBSOCKET_PORT
server.listen(webSocketPort, () => {
  console.log(`Socker listening on port ${webSocketPort}!`);
});