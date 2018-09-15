var App = function () {
    this.name="";
    this.gameId = 0;
    this.socketId = 0;
    //this.numberofPlayers = 0;
    this.players=[];
    this.hostId=0;

    //{gameId, mySocketId}
    this.hostGameinit = function (data) {
        this.gameId = data.gameId;
        this.socketId = data.mySocketId;
        //this.numberofPlayers = 1;

        messageText.textContent=data.gameId;
        gameInput.value=data.gameId;
    };

    this.playResponse = function (data) {
        console.log(data.resValue);
        var playerResponse = Game.players[game.turn].play(data.resValue);
        console.log(playerResponse);

        if(game.turn == game.startPlayer){
            game.roundSuit = playerResponse.suit.str;
            game.round.splice(0,0,[playerResponse,Game.players[game.turn].playerNum]);
            game.turn=(game.turn+1)%4;
        }else if(playerResponse.suit.str==game.roundSuit) {
            game.round.splice(0,0,[playerResponse,Game.players[game.turn].playerNum]);
            game.turn=(game.turn+1)%4;
        } else if(Game.players[game.turn].hand.hasCardofSuit(game.roundSuit)) {
            console.log("play the right move!");
            Game.players[game.turn].hand.addCard(playerResponse);
            console.log(Game.players[game.turn].name);
            console.log(Game.players[game.turn].hand);
            socket.emit('hostUndoLastTurn',{socketId:Game.players[game.turn].id,rank:data.resValue.rank,suit:data.resValue.suit});
            socket.emit("hostBroadcastClearLastTurn",{gameId:app.gameId,id:game.turn});
            Game.players[game.turn].getResponse();
        } else{
            game.round.splice(0,0,[playerResponse,Game.players[game.turn].playerNum]);
            game.turn=(game.turn+1)%4;
        }

        // game.round[game.turn]=data.resValue

        if(game.round.length==4){
            game.getWinner();
        }else {
            Game.players[game.turn].getResponse();
        }
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
        game.gameNo=2;
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