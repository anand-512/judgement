var App = function () {
    this.name="";
    this.gameId = 0;
    this.socketId = 0;
    this.numberofPlayers = 0;
    this.players=[];
    this.hostId=0;

    //{gameId, mySocketId}
    this.hostGameinit = function (data) {
        this.gameId = data.gameId;
        this.socketId = data.mySocketId;
        this.numberofPlayers = 1;

        messageText.textContent=data.gameId;
        gameInput.value=data.gameId;
    };
};

App.CreateGame = function () {
    app.name=nameInput.value;
    createButton.disabled=true;
    joinButton.disabled=true;
    socket.emit("hostCreateNewGame");
    console.log("inside App.CreateGame");
};

App.JoinGame = function () {
    app.name = nameInput.value;
    app.socketId = socket.id;
    app.gameId = gameInput.value;
    messageText.textContent="Wait for the Host to Start Game";
    createButton.disabled=true;
    joinButton.disabled=true;
    startGameButton.disabled=true;
    socket.emit("playerJoinGame",{
        gameId: gameInput.value,
        mySocketId: socket.id,
        playerName: nameInput.value
    });
    console.log("inside App.JoinGame");
};

App.StartGame = function () {
    if(app.players.length == 4) {
        game.Addplayers(app.players);
        game.score.initScore();
        startGameButton.disabled=true;
        game.gameNo=13;
        game.startGame();
    } else {
        alert("Wait for other Players to join");
    }
    console.log('inside App.StartGame');
};

App.showCards = function (data) {
    var temp = new Hand();
    temp.hand=data.hand;
    console.log(temp.showHand());

};

App.ConfirmClaim = function () {
    var claim = claimInput.value;
    claimButton.disabled=true;
    console.log("inside confirm claim");
    socket.emit('playerClaim',{hostId:app.hostId,name:app.name,claimValue:claim,socketId:socket.id});

};

App.SelectTrump = function () {
    game.selectTrump();

};

App.startRounds = function () {
    game.newRound();
};

App.ConfirmTrump = function () {
    var trump = selectTrump.value;
    console.log("inside confirm trump");
    socket.emit('trumpChosen',{hostId:app.hostId,name:app.name,trumpValue:trump,socketId:socket.id});

};