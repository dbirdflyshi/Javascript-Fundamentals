var Skater = require('./skater.js');

class SkatePark {
    constructor(objs) {
        this.name = objs.name;
        this.yearFounded = objs.year;
        this.style = objs.type;
        this.features = objs.features;
        this.isPrivate = objs.isPrivate || false;
        this.cost = objs.price || 0;
        this.occupants = [];
    }
    admit(skater){
        if(this.isPrivate === false && this.occupants.length <3){
            this.occupants.push(skater);
            return 'Welcome to the free '+this.name+' Skatepark!'
        } else if (this.cost <= skater.money && this.occupants.length <3){
            skater.money -= this.cost;
            this.occupants.push(skater);
            return 'Welcome to '+this.name+', the cost will be $'+this.cost+'.00.'
        } else if (this.cost > skater.money && this.occupants.length < 3){
            return `Sorry, you don't have enough money.`
        } else{
            return'Sorry, we are at max capacity. Thank you for understanding.'
        }
    }
}
module.exports = SkatePark;