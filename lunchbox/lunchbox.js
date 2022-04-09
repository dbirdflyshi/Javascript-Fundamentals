const Snack = require("./snack");

class LunchBox {
    constructor(lunchBoxObject){
        this.owner = lunchBoxObject.owner;
        this.material = lunchBoxObject.madeOf;
        this.shape = lunchBoxObject.shape;
        this.color = lunchBoxObject.color;
        this.snacks = [];
    }
    acquireSnack(snack){
        this.snacks.push(snack);
        snack.isInLunchBox = true;
    }

    findHealthySnacks(){
        var healthySnacks = this.snacks.filter(s => s.name.toLowerCase().includes('fruit'));
        healthySnacks = healthySnacks.map(function (el) { return el.name; });
        return healthySnacks;
    }
}

module.exports = LunchBox;
