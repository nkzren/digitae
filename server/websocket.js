const WebSocketServer = require("websocket").server;
const { getRandomQuote } = require("./quotes")

module.exports = (app) => {
  wsServer = new WebSocketServer({ httpServer: app, keepaliveInterval: 5000, keepaliveGracePeriod: 2000 });

  wsServer.on("request", (request) => {
    const connection = request.accept("echo-protocol", request.origin);

    connection.on("message", (message) => {
      try {
        const data = JSON.parse(message.utf8Data)
        if (data.type == "gameStart") {
          data.quote = getRandomQuote()
          wsServer.unmount()
        }
        if (data.type == "finished") {
          wsServer.mount({ httpServer: app })
        }
        wsServer.broadcast(JSON.stringify(data));
      } catch (err) {
        console.log('WebSocker server error')
      }
      
    });
  });

  wsServer.on("connect", (connection) => {
    console.log(wsServer.connections.length)
    wsServer.broadcast(JSON.stringify({type: "connected"}))
  })
};
