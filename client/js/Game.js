var Game = function () {

    this.score = new Scoreboard();
    this.dealer = -1;
    this.startPlayer = -1;
    //this.trump = Math.floor(Math.random() * Math.floor(4));
    this.round = [];
    this.lsuit = "";

    this.Addplayers = function(data){
        for (var i in data){
            var player= new Player(data[i].mySocketId,data[i].playerName);
            //Game.players.splice(0,0,player);
            Game.players.push(player);
        }
        for(var i=0;i<4;i++) {
            Game.players[i].playerNum=i;
        }

        console.log("after Addplayers"+ 4);
    };

    this.startGame= async function() {
        await this.newGame();
        console.log("after newGame");
        console.log("after startGame");
    }

    this.newGame=async function () {
        this.deck = new Deck();
        this.deck.shuffle();
        this.dealer = (this.dealer + 1) % 4;
        this.dealCards();
        //this.showTrump();
        this.showScore();
        this.gamescore=[];
        for(var i =0;i<4;i++) {
            this.gamescore.push(0);
        }
        this.startPlayer=(this.dealer+1)%4;
        this.claim = [];
        this.turn=this.startPlayer;
        socket.emit('displayPlayers',{gameId:app.gameId,players:Game.players});
        socket.emit('hostBroadcastGameNum',{gameId:app.gameId,gameNo:this.gameNo});
        this.getClaim();
        this.roundCount=0;
    };

    this.dealCards = function () {
        var cardsDealt = 52;
        var i = 0;
        while(cardsDealt != 0){
            Game.players[i % 4].addCard(this.deck.deal());
            i += 1;
            cardsDealt=cardsDealt-1;
        }
        this.showCards();
    };

    this.showCards = function () {

        for(var v in Game.players){
            //socket.emit("hostShowCards",{gameId:app.gameId,socketId:Game.players[v].id,hand:Game.players[v].hand.hand,trump:this.trump})
            socket.emit("hostShowCards",{gameId:app.gameId,socketId:Game.players[v].id,hand:Game.players[v].hand.hand});
        }
    };

    this.showTrump = function () {
        socket.emit('hostShowTrump',{gameId:app.gameId,trump:this.trump})
    };

    this.showScore =function() {
        socket.emit('hostShowScore',{gameId:app.gameId,score:this.score.score,players:Game.players})
    };

    this.getClaim = function() {
        for(var i in Game.players) {
            this.claim.push(0);
        }
        Game.players[this.turn].getClaim();
    };

    this.getBidWinner = function() {
        var firstBidderIndex = (this.dealer + 1) % 4;
        var p1claim = this.claim[firstBidderIndex];
        var p2claim = this.claim[(firstBidderIndex + 1) % 4];
        var p3claim = this.claim[(firstBidderIndex + 2) % 4];
        var p4claim = this.claim[(firstBidderIndex + 3) % 4];

        var team1claim = p1claim + p3claim;
        var team2claim = p2claim + p4claim;

        var bidWinner = firstBidderIndex;
        var bidWinnerVal = p1claim;

        if(team1claim >= team2claim) {
            if(p1claim > p3claim) {
                bidWinner = firstBidderIndex;
                bidWinnerVal = p1claim;
            } else {
                bidWinner = (firstBidderIndex + 2) % 4;
                bidWinnerVal = p3claim;
            }
        } else {
            if(p2claim > p4claim) {
                bidWinner = (firstBidderIndex + 1) % 4;
                bidWinnerVal = p2claim;
            } else {
                bidWinner = (firstBidderIndex + 3) % 4;
                bidWinnerVal = p4claim;
            }
        }

        for(var v in Game.players){
            console.log("inside Game getBidWinner v: " + v);
            if(mod(v, 2) == mod(bidWinner, 2)) {
                socket.emit("hostShowRoundsToWin",{gameId:app.gameId,socketId:Game.players[v].id, roundsToWin: bidWinnerVal});
            } else {
                socket.emit("hostShowRoundsToWin",{gameId:app.gameId,socketId:Game.players[v].id, roundsToWin: 14 - bidWinnerVal});
            }
        }

        return bidWinner;
    };

    this.selectTrump = function () {
        Game.players[game.turn].selectTrump();
    };

    this.newRound=  function() {
        this.round = [];
        this.lsuit = "";
        socket.emit('hostBroadcastRoundNum',{gameId:app.gameId,roundNo:this.roundCount+1});
        setTimeout(function () {
            socket.emit('hostBroadcastClearPot',{gameId:app.gameId,players:Game.players});
            Game.players[game.turn].getResponse();
        }, 3000);
    };
};

Game.players=[];
