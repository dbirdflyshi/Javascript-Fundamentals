var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor (medusaName, statueList = []){
        this.name = medusaName;
        this.statues = statueList;
    }
    gazeAtVictim(victim){
        if(this.statues.length < 3){
            var statue = new Statue(victim.name);
            this.statues = [...this.statues, statue];
        } else{
            var statue = new Statue(victim.name);
            var statues = this.statues;
            var freedStatue = new Person(statues.shift().name, 'relieved');
            this.statues = statues;
            this.statues = [...this.statues, statue];
            return freedStatue;
        }
    }
};

module.exports = Medusa