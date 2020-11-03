const { ESRCH } = require('constants');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.sockets.on('connection', (socket) => {
    socket.on('url', (data) => {
        io.sockets.emit('url', data);
    });
})


const path = require('path');



app.get('/stream', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'stream.html'));
});
app.get('/view', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'view.html'));
});

server.listen(process.env.PORT || 3000, process.env.HOST ||  'localhost', () => {
    console.log('Server on port', process.env.PORT || 3000);
});