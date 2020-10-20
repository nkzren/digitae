const webSocket = require('./websocket')
const express = require('express')
const http = require('http')

// Routers
const indexRouter = require('./routes/index')
const testApiRouter = require('./routes/testApi')

const app = express()
const port = process.env.API_PORT || 5000

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

app.listen(port, () => console.log(`Listening on port ${port}`))

server.listen(Number(5000) + 1, () => {
  console.log(`Socker listening on port ${Number(5000) + 1}!`);
});