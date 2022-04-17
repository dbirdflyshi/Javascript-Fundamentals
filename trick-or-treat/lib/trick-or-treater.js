var Costume = require('../lib/costume');
var Bag = require('../lib/bag');
var Candy = require('../lib/candy');

class TrickOrTreater{
    constructor(costume,bag){
        this.dressedUpAs = costume.style;
        this.bag = bag;
        this.hasCandy = false;
        this.countCandies = 0;
    }
    putCandyInBag(candy){
        this.bag.fill(candy);
        this.hasCandy = true;
        this.countCandies = this.bag.count;
    }
    eat(){
        if(this.countCandies !=0){
            this.bag.candies.pop()
            this.countCandies = this.bag.count = this.bag.candies.length;
        }else{
            this.hasCandy = false;
            this.bag.empty = true;
        }
    }
}

module.exports = TrickOrTreater;