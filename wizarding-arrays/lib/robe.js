class Robe{
    constructor(pockets = Array(10).fill([])){
        this.pockets = pockets
    }
    addToPocket(item){
        var found = false;
        for(let i = 0; found === false ; i++){
            if(this.pockets[i].length === 0){
                this.pockets.fill([item], i, i+1)
                found = true;
            }
        }
    }
    retrieve(item) {
        // getting the index of the potion
        var index = this.pockets.findIndex(obj => obj[0] === item);
        // removing the item with the index found above
        var retrievedItem = this.pockets[index][0]
        this.pockets[index] = [];
        return retrievedItem;
    }
    emptyAllPockets(){
        for(let i = 0 ; i<this.pockets.length; i++){
            this.pockets[i] = [];
        }
    }
}

module.exports = Robe;