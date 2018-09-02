//Hand.js
function Hand() {
    this.self = {
        clubs : [],
        diamonds : [],
        spades : [],
        hearts : [],
    };
    this.hand = [this.self.clubs,this.self.diamonds,
        this.self.spades, this.self.hearts];

    this.addCard = function (card){

        if(card.suit.str == Suit(c).str)
            this.self.clubs.push(card);
        else
        if(card.suit.str == Suit(d).str)
            this.self.diamonds.push(card);
        else
        if(card.suit.str == Suit(s).str)
            this.self.spades.push(card);
        else
        if(card.suit.str == Suit(h).str)
            this.self.hearts.push(card);
        else
            console.log('Invalid card');

    };

    this.showHand =function() {
        var out = "";
        for(var i=0;i<4;i++)
            for(var j in this.hand[i]) {
                out = out + this.hand[i][j].rank.str + this.hand[i][j].suit.str + " ";
            }
        return out;
    };
    // this.gsize = function () {
    //     return this.self.clubs.length + this.self.diamonds.length+ this.self.spades.length + this.self.hearts.length
    //
    // }
    //
    // this.addCard = function (card){
    //
    //     if(card.suit.str == Suit(c).str)
    //         this.self.clubs.push(card)
    //     else
    //     if(card.suit.str == Suit(d).str)
    //         this.self.diamonds.push(card)
    //     else
    //     if(card.suit.str == Suit(s).str)
    //         this.self.spades.push(card)
    //     else
    //     if(card.suit.str == Suit(h).str)
    //         this.self.hearts.push(card)
    //     else
    //         console.log('Invalid card');
    //
    // }
    //
    // this.removeCard = function (card) {
    //     var suitId = card.suit.id
    //     if(suitId==0)
    //         this.self.clubs.splice(this.hand[suitId].indexOf(card),1)
    //     else
    //     if(suitId==1)
    //         this.self.diamonds.splice(this.hand[suitId].indexOf(card),1)
    //     else
    //     if(suitId==2)
    //         this.self.spades.splice(this.hand[suitId].indexOf(card),1)
    //     else
    //         this.self.hearts.splice(this.hand[suitId].indexOf(card),1)
    //
    //     this.updateHand()
    // }
    //
    // this.updateHand = function () {
    //     this.hand = [this.self.clubs, this.self.diamonds,
    //         this.self.spades, this.self.hearts]
    // }
    //
    // this.hasCardofSuit = function (suit) {
    //     if(suit=="c")
    //         if(this.self.clubs.length==0)
    //             return false
    //         else
    //             return true
    //     else
    //     if(suit=="d")
    //         if(this.self.diamonds.length==0)
    //             return false
    //         else
    //             return true
    //     else
    //     if(suit=="s")
    //         if(this.self.spades.length==0)
    //             return false
    //         else
    //             return true
    //     else
    //     if(suit=="h")
    //         if(this.self.hearts.length==0)
    //             return false
    //         else
    //             return true
    // }


}
