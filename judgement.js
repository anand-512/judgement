var io;
var gameSocket;
var gameIds= [];

exports.initGame = function(sio, socket){
    io = sio;
    gameSocket = socket;
    gameSocket.emit('connected', { message: "You are connected!" });

    // Host Events
     gameSocket.on('hostCreateNewGame', hostCreateNewGame);
     gameSocket.on('playerJoinGame', playerJoinGame);
     gameSocket.on('hostShowCards', hostShowCards);
     gameSocket.on('hostShowTrump', hostShowTrump);
     gameSocket.on('hostShowScore', hostShowScore);
     gameSocket.on('displayPlayers',displayPlayers)
     gameSocket.on("hostBroadcastGameNum",hostBroadcastGameNum);
     gameSocket.on('hostGetClaim', hostGetClaim);
     gameSocket.on('playerClaim', playerClaim);
     gameSocket.on('hostShowRoundsToWin', hostShowRoundsToWin);
     gameSocket.on('hostBroadcastPlayerClaim',hostBroadcastPlayerClaim);
     gameSocket.on('hostBroadcastRoundNum',hostBroadcastRoundNum);
     gameSocket.on('hostBroadcastClearPot',hostBroadcastClearPot);
     gameSocket.on('hostSelectTrump', hostSelectTrump);
     gameSocket.on('hostGetResponse', hostGetResponse);
     gameSocket.on('trumpChosen', trumpChosen);
     gameSocket.on('playerResponse', playerResponse);
     gameSocket.on('hostBroadcastPlayerResponse',hostBroadcastPlayerResponse);
     gameSocket.on('hostUndoLastTurn', hostUndoLastTurn);
     gameSocket.on('hostBroadcastClearLastTurn',hostBroadcastClearLastTurn);
     gameSocket.on('hostBroadcastPlayerHandWon',hostBroadcastPlayerHandWon)
     gameSocket.on('hostBroadcastMatchWinner',hostBroadcastMatchWinner);
     gameSocket.on('BroadcastChatData',BroadcastChatData);
    //
    //
    // gameSocket.on('hostValidClaim',hostValidClaim);
    //

}

function hostCreateNewGame() {
    // Create a unique Socket.IO Room
    var thisGameId = ( Math.random() * 100000 ) | 0;
    gameIds.push(thisGameId);

    console.log("Inside hostCreateNewGame");

    // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
    this.emit('newGameCreated', {gameId: thisGameId, mySocketId: this.id});

    // Join the Room and wait for the players
    this.join(thisGameId.toString());
};

//{gameId, mySocketId, playerName}
function playerJoinGame(data) {
    console.log('Player ' + data.playerName + ' attempting to join game: ' + data.gameId);

    // A reference to the player's Socket.IO socket object
    var sock = this;

    // Look up the room ID in the Socket.IO manager object.
    var room=io.nsps['/'].adapter.rooms[data.gameId];
    // If the room exists...
    if(room){

        // Join the room
        sock.join(data.gameId);

        console.log('Player ' + data.playerName + ' joining game: ' + data.gameId );

        // Emit an event notifying the clients that the player has joined the room.
        io.sockets.in(data.gameId).emit('playerJoinedRoom', data)
    }
};

function hostShowCards(data) {
    io.to(data.socketId).emit('showCards',data);
};

function hostShowTrump(data) {
    io.sockets.in(data.gameId).emit('showTrump',{trump:data.trump});
};

function hostShowScore(data) {
    io.sockets.in(data.gameId).emit('showScore',data);
};

function displayPlayers(data) {
    io.sockets.in(data.gameId).emit('displayPlayers',data)
};

function hostBroadcastGameNum(data) {
    console.log("inside hostBroadcastGameNum");
    io.sockets.in(data.gameId).emit('BroadcastGameNum',data)
};

function hostGetClaim(data) {
    io.to(data.socketId).emit('getClaim',data);
};

function playerClaim(data) {
    io.to(data.hostId).emit('playerClaim',data);
};

function hostShowRoundsToWin(data) {
    io.to(data.socketId).emit('showRoundsToWin',data);
};

function hostBroadcastPlayerClaim(data) {
    io.sockets.in(data.gameId).emit('BroadcastPlayerClaim',data);
    console.log("inside hostBroadcastPlayerClaim");
};

function hostBroadcastRoundNum(data) {
    console.log("inside hostBroadcastRoundNum");
    io.sockets.in(data.gameId).emit('BroadcastRoundNum',data);
};

function hostBroadcastClearPot(data) {
    io.sockets.in(data.gameId).emit('BroadcastClearPot',data);
};

function hostSelectTrump(data) {
    //io.to(data.socketId).emit('selectTrump',data);
    io.sockets.in(data.gameId).emit('selectTrump',data);
};

function hostGetResponse(data) {
    //io.to(data.socketId).emit('getResponse',data);
    io.sockets.in(data.gameId).emit('getResponse',data);
};

function trumpChosen(data) {
    io.to(data.hostId).emit('trumpChosen',data);
};

function playerResponse(data) {
    io.to(data.hostId).emit('Response',data);
    console.log("Inside Player Response:"+data.resValue);
};

function hostBroadcastPlayerResponse(data) {
    io.sockets.in(data.gameId).emit('BroadcastPlayerResponse',data)
    console.log("inside hostBroadcastPlayerResponse");
};

function hostUndoLastTurn(data) {
    io.to(data.socketId).emit('UndoLastTurn',data);
};

function hostBroadcastClearLastTurn(data) {
    io.sockets.in(data.gameId).emit("ClearLastTurn",data);
};

function hostBroadcastPlayerHandWon(data) {
    console.log("inside hostBroadcastPlayerHandWon");
    io.sockets.in(data.gameId).emit('BroadcastPlayerHandWon',data)
};

function hostBroadcastMatchWinner(data) {
    console.log("inside hostBroadcastMatchWinner");
    io.sockets.in(data.gameId).emit('BroadcastMatchWinner',data)
};

function BroadcastChatData(data) {
    console.log("inside BroadcastChatData");
    io.sockets.in(data.gameId).emit('ChatData',data);
};

