var c = 0;
var d = 1;
var s = 2;
var h = 3;
var suits = ["c", "d", "s", "h"];
var counter=0;
//Card.js
function Card(r,s) {
    var self = {
        rank : Rank(r),
        suit : Suit(s),
    };


    return self;
}

var Suit = function (iden) {
    var self = {
        id : iden,
        str : "",
    };
    var suits = ["c", "d", "s", "h"];

    if(iden == -1)
        self.str = "Unset";
    else
    if(iden <= 3)
        self.str = suits[iden];
    else
        console.log('Invalid card identifier'+iden);

    return self;

};

var Rank = function (r) {
    var self = {
        rank : r,
        str: "",
    };

    var strings = ["J", "Q", "K", "A"];

    if(r >= 2 && r <= 10)
        self.str = r+"";
    else
    if(r > 10 && r <= 14)
        self.str = strings[r - 11];
    else
        console.log('Invalid rank identifier'+r);

    return self;
};
