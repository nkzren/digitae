const socketio = require('socket.io')
// import roomId from './roomManager';
const roomId = require('./roomManager')

module.exports = server => {
  const io = socketio.listen(server);


  console.log('Started listening!')
  io.on('connection', socket => {
    console.log('Client Connected');
  });

  return io;
};