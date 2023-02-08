const app = require('express')();

const server = require('http').createServer(app);

require('dotenv').config()

const env = process.env;

const port = 8000 || env.PORT

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
})

io.on('connection', (socket) => {
    socket.on('chat', (payload) => {
        io.emit('chat', payload)
    })
})

server.listen(port, () => {
    console.log("BACKEND UP AND RUNNING");
})