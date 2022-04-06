const Human = require("./human");

class Ogre{
    constructor(chars){
        this.name = chars.name;
        this.home = chars.abode || 'Swamp';
        this.swings = 0;
    }
    encounter(human) {
        human.encounterOgre(this);
    }
    swingAt(){     
         this.swings += 1;
    }
    apologize(human){
        if(human.knockedOut === true){
            human.knockedOut = false;
        }
    }
}
module.exports = Ogre;

// const ogre = new Ogre({ name: 'Brak' });
// const human = new Human('Jane');

// ogre.encounter(human);
// console.log('first check if ogre.swings is 0 : '+ogre.swings+' and encounter counter is :'+human.encounterCounter)
// ogre.encounter(human);
// console.log('after the second encounter, the encounter count is '+human.encounterCounter+' and the swing count is '+ogre.swings)
// ogre.encounter(human);
// console.log('after the second encounter, the encounter count is ' + human.encounterCounter + ' and the swing count is ' + ogre.swings)
// console.log('second check if human noticesOgre is true : ' + human.noticedOgre + ' and encounter counter is :' + human.encounterCounter);
// console.log('third check, ogre should swing 1 : ' + ogre.swings + ' and encounter counter is :' + human.encounterCounter);