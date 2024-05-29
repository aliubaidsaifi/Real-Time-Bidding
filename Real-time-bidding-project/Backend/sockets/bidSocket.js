module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('bid', (bid) => {
      io.emit('update', bid);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};
