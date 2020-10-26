const WebSocketServer = require("websocket").server;
const { verifyToken } = require("./auth");
const { WEBSOCKET_PORT } = require("./env");
const http = require("http");

const httpServer = http.createServer((request, response) => {});

httpServer.listen(WEBSOCKET_PORT, () => {
  console.log(`Server connected on port: ${WEBSOCKET_PORT}`);
});

wsServer = new WebSocketServer({ httpServer: httpServer });

ws;

wsServer.on("request", (request) => {
  const connection = request.accept(null, request.origin);

  connection.on("message", (message) => {
    console.log(message);
  });
});
