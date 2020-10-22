const socketio = require("socket.io");
const { verifyToken } = require("./auth");

module.exports = (app) => {
  const io = socketio.listen(app, {
    path: "/classic-mode",
  });

  console.log("Started listening!");
  const classicMode = io.of("/classic-mode");
  classicMode.use(verifyConnection).on("connection", async (socket) => {
    const { user, roomId, action, options } = socket.handshake.query

  });

  io.on("connection", (socket) => {
    console.log("Client Connected");
  });

  return io;
};

const verifyConnection = (socket, next) => {
  const handshake = socket.handshake;
  if (handshake.query && handshake.query.token) {
    const decoded = verifyToken(handshake.query.token);
    socket.decoded = decoded;
    next();
  }
};
