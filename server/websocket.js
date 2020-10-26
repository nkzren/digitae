const WebSocketServer = require("websocket").server;
const { WEBSOCKET_PORT } = require("./env");
const http = require("http");

module.exports = (app) => {
  wsServer = new WebSocketServer({ httpServer: app });
  
  wsServer.handleRequestAccepted

  wsServer.on("request", (request) => {
    const connection = request.accept("echo-protocol", request.origin);
  
    connection.on("message", (message) => {
      console.log(JSON.parse(message.utf8Data));
      wsServer.broadcast(message.utf8Data)
    });
  });

  wsServer.on("connect", (connection) => {
    wsServer.broadcast("FOI")
  })
};