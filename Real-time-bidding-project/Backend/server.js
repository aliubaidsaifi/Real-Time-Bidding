const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const pool = require('./config/db');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const bidRoutes = require('./routes/bidRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const bidSocket = require('./sockets/bidSocket');

app.use(express.json());
app.use('/users', authRoutes);
app.use('/items', itemRoutes);
app.use('/bids', bidRoutes);
app.use('/notifications', notificationRoutes);

bidSocket(io);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
