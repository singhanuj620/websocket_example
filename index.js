const express = require('express');
const app = express();
const socket = require('socket.io')


app.use(express.static('public'));

const server = app.listen('3000', () => {
    console.log('Server started on port 3000')
})

// Socket Setup
const io = socket(server)

io.on('connection', (socket) => {
    console.log('made socket connection')
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
})