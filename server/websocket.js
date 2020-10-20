const socketio = require('socket.io')

module.exports = server => {
  const io = socketio.listen(server);

  io.on('connection', socket => {
    console.log('Client Connected');
  });

  return io;
};