class Magician {
    constructor(objects = { name: name }) => {
        this.name = 'The Great ' + objects.name;
        this.assistant = objects.assistant;
        this.favoriteAccessory = objects.clothing;
    }
    
}

var magician = new Magician({ name: 'Scott' });
console.log(magician.favoriteAccessory);


module.exports = Magician 

class Magician {
    constructor(objects = { name: 'Albert',
                            hasAssistant: true,
                            clothing: 'top hat' }) {
        this.name = objects.magicianName;
        this.assistant = objects.hasAssistant;
        this.favoriteAccessory = objects.clothing;
    }
}

var magician = new Magician({name : 'Scott' });
console.log(magician.favoriteAccessory); // => undefined







class x {
    constructor(output = { key: 'value1',
                           keya : 'value2' }){
        this.key2 = output.key
        this.key3 = output.keya
}
}

var x2 = new x({key : 'newValue'});
console.log(x2.key3);                  // outputs - {key1: 'value1'}
