class LunchBox {
    constructor(lunchBoxObject){
        this.owner = lunchBoxObject.owner;
        this.madeOf = lunchBoxObject.madeOf;
        //this.shape = shapeType.shape;
        //this.color = colorName.color;
    }
}

var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });

var khalidsBox = new LunchBox({ owner: "Khalid", madeOf: "plastic", shape: "rectangular prism", color: "clear" });

console.log(willsBox.madeOf)

module.exports = LunchBox;
