const { ESRCH } = require('constants');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.sockets.on('connection', (socket) => {
    socket.on('url', (data) => {
        io.sockets.emit('url', data);
    });
})


const path = require('path');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/stream', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'stream.html'));
});
app.get('/view', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'view.html'));
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Server on port', process.env.PORT || 3000);
});