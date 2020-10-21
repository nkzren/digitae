const webSocket = require('./websocket')
const express = require('express')
const http = require('http')
const cors = require('cors')

const { API_PORT, WEBSOCKET_PORT } = require('./env')

// Routers
const indexRouter = require('./routes/index')
const testApiRouter = require('./routes/testApi')

const app = express()

// Starting websocket connection
const server = new http.Server(app);
webSocket(server)

app.use(cors({ origin: ['http://localhost:3000']}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', indexRouter)
app.use('/testApi', testApiRouter)

// error handler
app.use((err, req, res, _) => { 
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // Renderiza a pagina de erro
  res.status(err.status || 500)
  res.render('error')
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))

server.listen(WEBSOCKET_PORT, () => {
  console.log(`Websocket listening on port ${WEBSOCKET_PORT}!`);
});