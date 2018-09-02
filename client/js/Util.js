
pot_append = null;
deck_append = null;
get_response=null;
display_response=null;
create_table=null;
update_claim=null;
update_hand=null;
show_score=null;

$(function(){

    function deckAppend(data) {
        console.log("inside deckAppend");

        for(var i=0;i<4;i++) {
            for(var j in data.hand[i]) {
                var suit= data.hand[i][j].suit.str;
                var rank= data.hand[i][j].rank.rank;
                suit = getSuit(suit);
                rank = getRank(rank);
                $('#deck').append('<div class="card '+suit+' '+rank+'"><div class="face"></div></div>');
            }
        }
    };

    function getResponse() {
        $('.card.spades.rank1').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="14"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank1').remove();
        });


        $('.card.spades.rank2').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="2"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank2').remove();
        });


        $('.card.spades.rank3').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="3"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank3').remove();
        });


        $('.card.spades.rank4').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="4"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank4').remove();
        });


        $('.card.spades.rank5').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="5"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank5').remove();
        });


        $('.card.spades.rank6').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="6"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank6').remove();
        });


        $('.card.spades.rank7').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="7"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank7').remove();
        });


        $('.card.spades.rank8').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="8"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank8').remove();
        });


        $('.card.spades.rank9').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="9"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank9').remove();
        });


        $('.card.spades.rank10').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="10"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank10').remove();
        });


        $('.card.spades.rank11').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="11"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank11').remove();
        });


        $('.card.spades.rank12').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="12"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank12').remove();
        });


        $('.card.spades.rank13').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardspadesrank1");
            res["rank"]="13"
            res["suit"]="2"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.spades.rank13').remove();
        });

//clubs

        $('.card.clubs.rank1').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="14"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank1').remove();
        });


        $('.card.clubs.rank2').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="2"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank2').remove();
        });


        $('.card.clubs.rank3').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="3"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank3').remove();
        });


        $('.card.clubs.rank4').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="4"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank4').remove();
        });


        $('.card.clubs.rank5').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="5"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank5').remove();
        });


        $('.card.clubs.rank6').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="6"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank6').remove();
        });


        $('.card.clubs.rank7').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="7"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank7').remove();
        });


        $('.card.clubs.rank8').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="8"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank8').remove();
        });


        $('.card.clubs.rank9').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="9"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank9').remove();
        });


        $('.card.clubs.rank10').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="10"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank10').remove();
        });


        $('.card.clubs.rank11').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="11"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank11').remove();
        });


        $('.card.clubs.rank12').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="12"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank12').remove();
        });


        $('.card.clubs.rank13').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardclubsrank1");
            res["rank"]="13"
            res["suit"]="0"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.clubs.rank13').remove();
        });

//Hearts

        $('.card.hearts.rank1').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="14"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank1').remove();
        });


        $('.card.hearts.rank2').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="2"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank2').remove();
        });


        $('.card.hearts.rank3').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="3"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank3').remove();
        });


        $('.card.hearts.rank4').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="4"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank4').remove();
        });


        $('.card.hearts.rank5').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="5"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank5').remove();
        });


        $('.card.hearts.rank6').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="6"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank6').remove();
        });


        $('.card.hearts.rank7').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="7"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank7').remove();
        });


        $('.card.hearts.rank8').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="8"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank8').remove();
        });


        $('.card.hearts.rank9').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="9"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank9').remove();
        });


        $('.card.hearts.rank10').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="10"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank10').remove();
        });


        $('.card.hearts.rank11').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="11"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank11').remove();
        });


        $('.card.hearts.rank12').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="12"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank12').remove();
        });


        $('.card.hearts.rank13').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]="13"
            res["suit"]="3"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.hearts.rank13').remove();
        });

//Diamonds

        $('.card.diamonds.rank1').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="14"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank1').remove();
        });


        $('.card.diamonds.rank2').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="2"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank2').remove();
        });


        $('.card.diamonds.rank3').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="3"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank3').remove();
        });


        $('.card.diamonds.rank4').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="4"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank4').remove();
        });


        $('.card.diamonds.rank5').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="5"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank5').remove();
        });


        $('.card.diamonds.rank6').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="6"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank6').remove();
        });


        $('.card.diamonds.rank7').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="7"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank7').remove();
        });


        $('.card.diamonds.rank8').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="8"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank8').remove();
        });


        $('.card.diamonds.rank9').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="9"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank9').remove();
        });


        $('.card.diamonds.rank10').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="10"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank10').remove();
        });


        $('.card.diamonds.rank11').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="11"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank11').remove();
        });


        $('.card.diamonds.rank12').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="12"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank12').remove();
        });


        $('.card.diamonds.rank13').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecarddiamondsrank1");
            res["rank"]="13"
            res["suit"]="1"
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.diamonds.rank13').remove();
        });

    };

    function showScore(data) {
        $("#scoreTable").empty();
        var input = "<tr>";
        for(var v in data.players){
            input+= "<th>"+data.players[v].name+"</th>";
        }
        input+="</tr>";
        $("#scoreTable").append(input);
        input = "<tr>";
        for(var v in data.score){
            input+="<td>"+data.score[v]+"</td>";
        }
        input += "</tr>";
        $("#scoreTable").append(input);
    };

    function potAppend(data) {
        console.log("inside");
        $('#pot').empty();
        for(var p in data){
            var name = data[p].name;
            var id  = data[p].playerNum;
            $('#pot').append('<div class="potplayers" id="' + id + '"><span>' + name + '</span></div>');
        }
    };


    function createTable(players) {
        console.log("inside createTable");
        $('#claimTable').empty();
        $('#claimTable').append('<tr><th>Players</th><th>Claim</th><th>Hands</th></tr>');
        for(var p in players){
            var name = players[p].name;
            var id = players[p].playerNum;
            $('#claimTable').append('<tr><th>' + name + '</th><th id="pc' + id + '">-</th><th id="ph' + id + '">0</th></tr>');
        }
    };

    function getSuit(input) {
        var out=""
        if(input=="c"||input=='0')
            out+="clubs"
        else
        if(input=='d'||input=='1')
            out+="diamonds"
        else
        if(input=="s"||input=='2')
            out+="spades"
        else
        if(input=="h"||input=='3')
            out+="hearts"
        else {
            out+="error"
            console.log("error at 99");
        }
        return out;
    }

    function getRank(input) {
        var out = "rank"
        if(input=="14")
            out+="1";
        else {
            out+=input;
        }
        return out;
    }

    function displayResponse(data) {
        console.log("inside");
        var id  = data.id
        var suit= data.res.suit
        var rank=data.res.rank
        suit = getSuit(suit);
        rank = getRank(rank);
        $('#'+id).empty();
        $('#'+id).append('<div class="card '+suit+' '+rank+'"><div class="face"></div></div>');
    }

    function updateClaim(data) {
        console.log("inside updateClaim611");
        $('#pc'+data.playerNum).empty();
        $('#pc'+data.playerNum).append(""+data.claim);
    }

    function updateHand(data) {
        var temp=parseInt($('#ph'+data.playerNum).text());
        temp++;
        $('#ph'+data.playerNum).empty();
        $('#ph'+data.playerNum).append(""+temp);
    }

    function cardAppend(data) {
        var suit = getSuit(data.suit);
        var rank = getRank(data.rank);
        $('#deck').append('<div class="card '+suit+' '+rank+'"><div class="face"></div></div>');

        $('.card.'+suit+'.'+rank+'').click(function () {
            var res={}
            $('#overlay').show();
            console.log("insidecardheartsrank1");
            res["rank"]=data.rank;
            res["suit"]=data.suit;
            socket.emit('playerResponse',{hostId:app.hostId,name:app.name,resValue:res,socketId:socket.id})
            $('.card.'+suit+'.'+rank+'').remove();
        });

    }
    function clearLastTurn(data) {
        $('#'+data.id).empty();
    }

    function clearPot(data) {
        var i=0;
        for(var p in data.players){
            console.log("clearPot "+i);
            document.getElementById(i).innerHTML = "<span>"+data.players[p].name+"</span>";
            i+=1;
        }
    }
    pot_append=potAppend;
    deck_append=deckAppend;
    get_response=getResponse;
    display_response=displayResponse;
    create_table=createTable;
    update_claim=updateClaim;
    update_hand=updateHand;
    show_score=showScore;
    clear_last_turn=clearLastTurn;
    card_append=cardAppend;
    clear_pot=clearPot;
    //Chat Stuff

    $('#chatInput').bind("enterKey",function(e){
        var data =   $('#chatInput').val();
        $('#chatInput').val("");
        socket.emit('BroadcastChatData',{gameId:app.gameId,name:app.name,msg:data});
    });
    $('#chatInput').keyup(function(e){
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });

});




//chat box feature
setInterval(function () {
    chatBox.scrollTop = chatBox.scrollHeight;
},1);


//modal Code
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
scorecardButton.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function mod(n, m) {
    return ((n % m) + m) % m;
}
