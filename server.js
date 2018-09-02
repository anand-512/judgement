var express = require('express');
var app = express();
var port = 5000;
var serv = require('http').Server(app);
var Judgement = require('./judgement');

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client',express.static(__dirname + '/client'));

serv.listen(process.env.PORT||port, () => {
 console.log("Server listening on port " + port);
});

var io = require('socket.io')(serv,{});

io.sockets.on('connection', function(socket){
    Judgement.initGame(io, socket);
    socket.on('disconnect',function(){
    });
});
