const Wand = require('../lib/wand');
const Pet = require('../lib/pet');

class Wizard{
    constructor(objs){
        this.name = objs.name;
        this.pets = [];
        this.petsCount = 0;
        this.wand;
    }
    adoptPet(pet){
        this.pets.push(pet)
        this.petsCount = this.pets.length
    }

    petList(){
        var petList = '';
        var vowels = ['A','E','I','O','U'];
        for(let i = 0; i < this.petsCount; i++){
            if(vowels.includes(this.pets[i].type[0].toUpperCase()) && i === 0){
                var article = 'An '
            } else if (vowels.includes(this.pets[i].type[0].toUpperCase()) && i != 0){
                var article = ' An '
            } else if (!vowels.includes(this.pets[i].type[0].toUpperCase()) && i === 0){
                var article = 'A '
            } else if (!vowels.includes(this.pets[i].type[0].toUpperCase()) && i != 0) {
                var article = ' A '
            }
            if(i === this.petsCount-1){
                var closing = '.';
            } else {
                var closing = ';';
            }
            var pet = article+this.pets[i].type+' named '+this.pets[i].name+closing
            petList += pet;
        }
        return petList;
    }
    getWand(wand){
        this.wand = wand;
    }
    castSpell(spell){
        return this.wand.cast(spell);
    }
}

module.exports = Wizard;
