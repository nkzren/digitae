const WebSocketServer = require("websocket").server;
const { verifyToken } = require("./auth");
const { WEBSOCKET_PORT } = require("./env");
const http = require("http");

const httpServer = http.createServer((request, response) => {
  console.log(`${new Date()} Received request for: ${request.url}`);
});

httpServer.listen(WEBSOCKET_PORT, () => {
  console.log(`Server connected on port: ${WEBSOCKET_PORT}`);
});

wsServer = new WebSocketServer({ httpServer: httpServer });

wsServer.on("request", (request) => {
  const connection = request.accept("echo-protocol", request.origin);

  connection.on("connection", (connection) => {
    console.log("batata");
  });

  connection.on("message", (message) => {
    console.log(JSON.parse(message.utf8Data));
  });
});
