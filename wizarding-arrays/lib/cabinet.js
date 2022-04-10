const Potion = require('../lib/potion');

class Cabinet{
    constructor(){
        this.potions = []
    }
    isEmpty(){
        if(this.potions.length === 0){
            return true;
        } else {
            return false;
        }
    }
    add(potion){
        this.potions = this.potions.concat(potion);
    }
    takeFirstPotion(){
        var firstPotion = this.potions.shift();
        return firstPotion;
    }
    takePotionWithName(potion){
        // var namedPotion = this.potions.splice(this.potions.indexOf(potion), 1);
        // getting the index of the potion
        var index = this.potions.findIndex(obj => obj.name === potion);
        // removing the item with the index found above
        var namedPotion = this.potions[index]
        this.potions = [...this.potions.slice(0, index), ...this.potions.slice(index + 1)]
        return namedPotion;
    }
    count(potion){
        var counter = 0
        for (let i = 0; i < this.potions.length; i++){
            if(this.potions[i].name === potion){
                counter +=1
            }
        }
        return counter;
    }
}
module.exports = Cabinet;