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
            app.numberofPlayers += 1;
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
            roundInfo.textContent = "Your team needs to win " + data.roundsToWin + " hands";
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
            messageText.textContent=" Enter Claim For Your Cards";
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
            messageText.textContent=" "+data.name+" has Claimed "+data.claim+" hands."
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
            //trumpBox.style.display = 'block';
            //overlay.style.display='none';
        });

        socket.on('getResponse',function (data) {
            messageText.textContent="Its Your Turn to Play!";
            overlay.style.display='none';
        });

        socket.on('trumpChosen',function (data) {
            game.trump = parseInt(data.trumpValue);
            console.log("trumpValue:" + game.turn+ " is " + suitNames[data.trumpValue]);
            game.showTrump();
            game.turn = game.startPlayer;
            App.startRounds();
        });

    }
};