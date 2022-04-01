const Direwolf = require("./direwolf");

class Stark{
    constructor(chars){
        this.name = chars.name;
        this.location = chars.area || 'Winterfell';
        this.safe = false;
    }
    sayHouseWords(){
        if( this.safe === false ){
            return 'Winter is Coming'
        }
        else {
            return 'The North Remembers'
        }
    }
    callDirewolf(name,location){
        
    }
}
module.exports = Stark;