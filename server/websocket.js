const socketio = require('socket.io')


module.exports = app => {
  const io = socketio.listen(app, {
    path: '/classic-mode' 
  });


  console.log('Started listening!');
  const classicMode = io.of('/classic-mode');
  classicMode.use()


  io.on('connection', socket => {
    console.log('Client Connected');
  });

  return io;
};