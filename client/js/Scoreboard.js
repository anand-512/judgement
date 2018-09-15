function Scoreboard(){
    this.score = [];

    this.initScore= function () {
        this.score = []
        for(var i in Game.players)
            this.score.push(0);
    };
    //
    // this.showScore = function() {
    //     console.log(this.score);
    // }
    this.updateScore = function(index,val) {
        this.score[index]+=val
    };
    this.displayWinner= function() {
        return this.score.indexOf(Math.max(...this.score));
    };
};
