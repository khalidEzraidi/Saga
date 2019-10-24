const io = require('socket.io')(2019)

io.on('connection', socket => {
    socket.emit('chat-message', 'Welcome to Saga')

    socket.on('send-chat-message', message => {
        socket.emit('chat-message', 'You said : ' + message)
    })
})