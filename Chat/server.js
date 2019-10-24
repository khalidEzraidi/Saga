const io = require('socket.io')(2019)

io.on('connection', socket => {
    console.log('New Connection')
    socket.emit('chat-message', 'Welcome to Saga')
    socket.on('send-chat-message', message => {
        console.log(message)
        socket.broadcast.emit('chat-message', message)
    })
})