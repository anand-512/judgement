//Deck.js
var numSuits = 4;
var minRank = 2;
var maxRank = 14;

function Deck() {
    var newDeck = [];
    for(var suit=0; suit<numSuits;suit++){
        for(var rank= minRank;rank<=maxRank;rank++)
            newDeck.push(Card(rank,suit));
    }



    this.showDeck = function () {
        var temp="";
        for(var i=0;i<newDeck.length;i++) {
            temp += newDeck[i].rank.str + newDeck[i].suit.str +" ";
        }
        console.log(temp);
    };

    this.shuffle = function () {
        var currentIndex = newDeck.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            var temporaryValue = newDeck[currentIndex];
            newDeck[currentIndex] = newDeck[randomIndex];
            newDeck[randomIndex] = temporaryValue;
        }

        this.deal = function() {
            var temp = newDeck.pop();
            return temp;
        }

        this.sortDeck = function() {
            newDeck.sort();
        }

        this.sizeDeck =function() {
            return newDeck.length;
        }

        return this.deck;
    };


}
