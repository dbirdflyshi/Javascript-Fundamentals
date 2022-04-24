var Snack = require("../src/snack.js");

class VendingMachine {
    constructor(objs){
        this.id = objs.id;
        this.isBroken = objs.isBroken;
        this.snacks = [];
    }
    addSnacks(snack){
        if(this.snacks.length > 0){
            for (let i = 0; i < this.snacks.length; i++) {
                if (this.snacks[i].name != snack.name) {
                    this.snacks.push(snack);
                } else {
                    return 'Sorry, that snack is already stocked! Try adding a different snack.'
                }
            }
        } else {
            this.snacks.push(snack);
        }
    }
    purchaseSnack(name,money){
        for (let i = 0; i < this.snacks.length; i++) {
            if (this.snacks[i].name === name) {
                if(this.snacks[i].itemsInStock > 0){
                    if(this.snacks[i].price < money){
                        this.snacks[i].removeItem();
                        return `Success! Here is $${money - this.snacks[i].price} back!`
                    }else{
                        return `Sorry, not enough payment. Please add more money.`
                    }
                }else{
                    return `Sorry, no items in stock. Try another item.`
                }
            }
        }
    }
}

module.exports = VendingMachine;
