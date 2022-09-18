const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const router = require('./router');
const cors = require('cors');
const {addUser , removeUser, getUser, getUsersInRoom} = require('./users');

app.use(cors());
app.use(router);

const io = new Server(server,{
    cors: {
        origin: "http://localhost:7000",
        methods: ["GET", "POST"]
    },
});


io.on('connection', (socket) => {
    socket.on('login', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
    console.log(socket.id);
       if(error) return callback(error);

       socket.join(user.room);

       socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
       socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
       
       io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

       callback();
    });

    socket.on('send', (message, callback) => {
        console.log(message);
        console.log(socket.id);
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });
socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if(user) {
        io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }

   
});

   
});




server.listen(PORT, ()=>{
    console.log(`server is listening to port ${PORT}`)
})

