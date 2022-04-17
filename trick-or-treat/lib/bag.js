var Candy = require('../lib/candy');

class Bag{
    constructor(){
        this.count = 0;
        this.candies = [];
        this.empty = true;
    }
    fill(candy){
        this.candies.push(candy);
        this.count = this.candies.length;
        this.empty = false;
    }
    contains(candy){
        for(let i = 0; i < this.candies.length; i++){
            if(this.candies[i].type === candy){
                return true;
            }else{
                return false;
            }
        }
    }
}

module.exports = Bag;