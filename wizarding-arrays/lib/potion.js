class Potion {
    constructor(name, rareness = 0 ) {
        this.name = name;
        this.rareness = rareness;
    }
    isRare(){
        if(this.rareness > 7){
            return true;
        } else{
            return false;
        }
    }
}

module.exports = Potion;