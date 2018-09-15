var Game = function () {

    this.score = new Scoreboard();
    this.dealer = -1;
    this.startPlayer = -1;
    //this.trump = Math.floor(Math.random() * Math.floor(4));
    this.round = [];
    this.roundSuit = "";
    this.team1Claim = 0;
    this.team2Claim = 0;
    this.team1HandsToWin = 0;
    this.team2HandsToWin = 0;

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
        var p1claim = this.claim[this.startPlayer];
        var p2claim = this.claim[(this.startPlayer + 1) % 4];
        var p3claim = this.claim[(this.startPlayer + 2) % 4];
        var p4claim = this.claim[(this.startPlayer + 3) % 4];

        var bidWinner = this.startPlayer;
        var bidWinnerVal = p1claim;

        if(p1claim + p3claim >= p2claim + p4claim) {
            if(p1claim > p3claim) {
                bidWinner = this.startPlayer;
                bidWinnerVal = p1claim;
            } else {
                bidWinner = (this.startPlayer + 2) % 4;
                bidWinnerVal = p3claim;
            }
        } else {
            if(p2claim > p4claim) {
                bidWinner = (this.startPlayer + 1) % 4;
                bidWinnerVal = p2claim;
            } else {
                bidWinner = (this.startPlayer + 3) % 4;
                bidWinnerVal = p4claim;
            }
        }

        this.team1Claim = this.claim[0] + this.claim[2];
        this.team2Claim = this.claim[1] + this.claim[3];

        if(bidWinner == 0 || bidWinner == 2) {
            this.team1HandsToWin = bidWinnerVal;
            this.team2HandsToWin = 14 - bidWinnerVal;
        } else {
            this.team2HandsToWin = bidWinnerVal;
            this.team1HandsToWin = 14 - bidWinnerVal;
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
        this.roundSuit = "";
        socket.emit('hostBroadcastRoundNum',{gameId:app.gameId,roundNo:this.roundCount+1});
        setTimeout(function () {
            socket.emit('hostBroadcastClearPot',{gameId:app.gameId,players:Game.players});
            Game.players[game.turn].getResponse();
        }, 3000);
    };

    this.getWinner = function () {
        console.log("Inside Get Winner:"+this.roundSuit);
        for(var i in this.round) {
            console.log(this.round[i][1]+this.round[i][0].rank.str+this.round[i][0].suit.str);
        }
        var win = this.round[parseInt(this.startPlayer)];
        console.log("win "+win[1]+this.startPlayer);
        var tflag = 0;
        if(parseInt(win[0].suit.id)==this.trump) {
            tflag = 1;
            console.log("at 177");
        }
        for(var card in this.round) {
            if(parseInt(this.round[card][0].suit.id)==this.trump) {
                console.log("at181");
                if(tflag==1) {
                    console.log("at183");
                    if(parseInt(this.round[card][0].rank.rank)>parseInt(win[0].rank.rank)) {
                        win = this.round[card];
                    } else {
                        continue;
                    }
                } else {
                    console.log("at190");
                    tflag = 1;
                    win = this.round[card];
                }
            } else {
                console.log("at196");
                if(tflag == 1) {
                    continue;
                } else {
                    console.log("at200");
                    if(this.round[card][0].suit.str == this.roundSuit) {
                        console.log("at202"+parseInt(this.round[card][0].rank.rank)+parseInt(win[0].rank.rank));
                        if(parseInt(this.round[card][0].rank.rank)>parseInt(win[0].rank.rank)) {
                            win=this.round[card];
                            console.log("at205"+win[1]);
                        } else {
                            continue;
                        }
                    } else {
                        continue;
                    }
                }
            }
        }
        console.log("Player "+String(win[1])+" won the hand!");
        socket.emit('hostBroadcastPlayerHandWon',{gameId:app.gameId,name:Game.players[parseInt(win[1])].name,playerNum:String(win[1])});
        this.startPlayer=win[1];
        this.turn=win[1];
        this.roundSuit="";
        this.round=[];
        this.gamescore[this.startPlayer]+=1;
        this.gamescore[(this.startPlayer + 2) % 4]+=1;
        var roundsToWin = 0;
        if(this.startPlayer == 0 || this.startPlayer == 2) {
            this.team1HandsToWin -= 1;
            roundsToWin = this.team1HandsToWin;
        } else {
            this.team2HandsToWin -= 1;
            roundsToWin = this.team2HandsToWin;
        }
        for(var v in Game.players){
            if(mod(v, 2) == mod(this.startPlayer, 2)) {
                socket.emit("hostShowRoundsToWin",{gameId:app.gameId,socketId:Game.players[v].id, roundsToWin: roundsToWin});
            }
        }

        this.roundCount+=1;
        if(this.roundCount == 13) {
            this.gameNo -= 1;
            if(this.gameNo == 0) {
                this.UpdateScoreboard();
                this.showWinner();
            } else {
                this.UpdateScoreboard();
                this.showScore();
                setTimeout(function () {
                    game.newGame();
                },2000);
            }
        } else {
            setTimeout(function () {
                game.newRound();
            },1000);
        }
    };

    this.UpdateScoreboard = function() {
        if(this.team1HandsToWin <= 0) {
            this.score.updateScore(0,1);
            this.score.updateScore(2,1);
        } else {
            this.score.updateScore(1,1);
            this.score.updateScore(3,1);
        }
    };

    this.showWinner = function() {
        this.showScore();
        socket.emit('hostBroadcastMatchWinner',{gameId:app.gameId,playerNum:this.score.displayWinner(),name:String(Game.players[parseInt(this.score.displayWinner())].name)})
    }
};

Game.players=[];
