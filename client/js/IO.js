var IO = function () {
    this.init= function () {

        //{message}
        socket.on('connected',function (data) {
            console.log(data.message);
        });

        //{gameId, mySocketId}
        socket.on('newGameCreated',function (data) {
            app.hostGameinit(data);
            app.players.push({
                gameId: data.gameId,
                mySocketId: socket.id,
                playerName: nameInput.value,
            });
        });

        //{gameId, mySocketId, playerName}
        socket.on('playerJoinedRoom',function (data) {
            //app.numberofPlayers += 1;
            chatBox.value += data.playerName + " has joined the Match.\n";
            messageText.textContent = " " + data.playerName + " has joined the Match.\n";
            app.players.push(data);

        });

        socket.on('showCards',function (data) {
            //setInterval(function () {
            App.showCards(data);
            deck_append(data);
            get_response();
            console.log("on showCards");
            claimTableHead.style.display = 'block';
            claimTable.style.display = 'inline-table';
            //}, 1000)
        });

        socket.on('showRoundsToWin', function (data) {
            console.log("inside IO showRoundsToWin");
            if(data.roundsToWin > 0) {
                roundInfo.textContent = "Your team needs to win " + data.roundsToWin + " hands";
            } else {
                roundInfo.textContent = "Your team has already won this game";
            }
        });

        socket.on('showTrump',function (data) {
            var trumpVal = parseInt(data.trump);
            var temp=suitNames[trumpVal];
            trumpText.value=temp;
            trumpText.textContent="Trump for this Game is "+temp;
            trumpText.style.display = 'block';
            form.style.display='none';
        });

        socket.on('showScore',function (data) {
            console.log(data.score);
            console.log(data.players);
            show_score(data);
        });

        socket.on('displayPlayers',function (data) {
            pot_append(data.players);
            create_table(data.players);
        });

        socket.on('BroadcastGameNum',function (data) {
            gameNoText.textContent="Game Number is : " + String(data.gameNo);
            //claimBox.style.display = 'block';
        });

        socket.on('getClaim',function (data) {
            //claimButton.disabled=false;
            console.log("inside IO getClaim");
            messageText.textContent=" Enter your Bid For the game";
            app.hostId=data.hostId;
        });

        socket.on('playerClaim',function (data) {
            if(game.turn != game.dealer){
                game.claim[game.turn]=parseInt(data.claimValue);
                console.log("claimValue:" + game.turn + data.name + " is " + data.claimValue);
                socket.emit('hostBroadcastPlayerClaim',{gameId:app.gameId,playerNum:game.turn,name:data.name,claim:data.claimValue});
                game.turn = (game.turn+1)%4;
                Game.players[game.turn].getClaim();
            }else{
                game.claim[game.turn]=parseInt(data.claimValue);
                console.log("claimValue:" + game.turn + data.name + " is " + data.claimValue);
                socket.emit('hostBroadcastPlayerClaim',{gameId:app.gameId,playerNum:game.turn,name:data.name,claim:data.claimValue});
                game.turn = game.getBidWinner();
                console.log("Bid Winner: " + game.turn);
                console.log("Claims:" + game.claim);
                console.log("Scores:"+game.score.score);
                App.SelectTrump();
                //App.startRounds();

            }
        });

        socket.on('BroadcastPlayerClaim',function (data) {
            messageText.textContent=" "+data.name+" has Bid "+data.claim+" hands."
            update_claim(data);
        });

        socket.on('BroadcastRoundNum',function (data) {
            roundNoText.textContent="Round Number is : " + String(data.roundNo);
            //claimBox.style.display = 'none';
        });

        socket.on('BroadcastClearPot',function (data) {
            clear_pot(data);
        });

        socket.on('selectTrump',function (data) {
            messageText.textContent="Choose Trump for the game";
            if(socket.id == data.socketId) {
                messageText.textContent="You won the bid. Choose the Trump!";
            } else {
                messageText.textContent= data.playerName + " won the bid. He'll decide the Trump";
            }
            //trumpBox.style.display = 'block';
            //overlay.style.display='none';
        });

        socket.on('getResponse',function (data) {
            if(socket.id == data.socketId) {
                messageText.textContent="It's your Turn to Play!";
            } else {
                messageText.textContent="It's "+ data.playerName + "'s Turn to Play!";
            }
            overlay.style.display='none';
        });

        socket.on('trumpChosen',function (data) {
            game.trump = parseInt(data.trumpValue);
            console.log("trumpValue:" + game.turn+ " is " + suitNames[data.trumpValue]);
            game.showTrump();
            game.turn = game.startPlayer;
            App.startRounds();
        });

        socket.on('Response', function (data) {
            console.log("playerResponse"+game.turn+"is"+data.resValue.rank+data.resValue.suit);
            socket.emit('hostBroadcastPlayerResponse',{gameId:app.gameId,name:data.name,id:game.turn,res:data.resValue})
            app.playResponse(data);
        });

        socket.on('BroadcastPlayerResponse',function (data) {
            display_response(data)
            messageText.textContent=" "+data.name+" played "+ rankNames[data.res.rank] +" of "+ suitNames[data.res.suit];
        });

        socket.on('UndoLastTurn',function (data) {
            alert("Play a Valid Move!!");
            card_append(data);
        });

        socket.on('ClearLastTurn',function (data) {
            messageText.textContent="Wait for Your Turn";
            clear_last_turn(data);
        });

        socket.on('BroadcastPlayerHandWon',function (data) {
            messageText.textContent=data.name+" Won the Hand";
            chatBox.value += "\n"+data.name+" Won the Hand\n\n";
            update_hand(data);
        });

        socket.on('BroadcastMatchWinner',function (data) {
            messageText.textContent=data.name+" Won the Match";
        });

        socket.on('ChatData', function (data) {
            chatBox.value += ""+data.name+" : "+data.msg+"\n";
        });

    }
};