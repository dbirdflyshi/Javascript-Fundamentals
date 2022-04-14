class Craft {
    constructor(objs){
        this.name = objs.type;
        this.materials = objs.materials;
        this.completed = false;
    }
    completeCraft(){
        this.completed = true;
        return 'All done! It looks great!'
    }
    calculateProjectTotal(){
        var total = 0;
        for(let i=0; i < this.materials.length; i++){
            total += this.materials[i].calculateMaterialCost()
        }
        return total;
    }
}

module.exports = Craft;
