//Player.js
var Player = function(iden,name){
    this.name = name;
    this.id = iden;
    this.score = 0;
    this.hand = new Hand();
    this.playerNum = 0;
    this.respond = false;


    this.addCard = function(card) {
        this.hand.addCard(card);
    };

    this.getClaim = function () {
        console.log("inside player get claim");
        socket.emit('hostGetClaim',{gameId:app.gameId,hostId:app.socketId,socketId:this.id, playerName: this.name});
    };

    this.getResponse = function() {
        socket.emit('hostGetResponse',{gameId:app.gameId,hostId:app.socketId,socketId:this.id, playerName: this.name});
    };

    this.selectTrump = function () {
        socket.emit('hostSelectTrump',{gameId:app.gameId,hostId:app.socketId,socketId:this.id, playerName: this.name});
    };

    this.play = function(input) {
        var card=Card(input["rank"],input["suit"]);
        this.removeCard(card);
        return card;
    };

    this.removeCard = function (card) {
        this.hand.removeCard(card);
    };

};


//Player.list = {};
Player.response=[];
