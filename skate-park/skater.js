class Skater{
    constructor(objs){
        this.name = objs.name;
        this.skill = objs.skill;
        this.tricks = objs.tricks;
        this.money = objs.cash || 0;
        this.frustration = 0;
    }

    practice(trick){
        if (trick === 'bigSpin' && this.tricks.bigSpin === false && this.frustration <2) {
            this.frustration += 1;
        } else if (trick === 'bigSpin' && this.tricks.bigSpin === false && this.frustration >= 2) {
            this.frustration = 0;
            this.tricks.bigSpin = true;
            return 'I just learned to ' + trick + '!!!'
        } else if (trick === 'kickflip' && this.tricks.kickflip === false && this.frustration < 2) {
            this.frustration += 1;
        } else if (trick === 'kickflip' && this.tricks.kickflip === false && this.frustration >= 2) {
            this.frustration = 0;
            this.tricks.kickflip = true;
            return 'I just learned to ' + trick + '!!!'
        } else if (trick === 'treflip' && this.tricks.treflip === false && this.frustration < 2) {
            this.frustration += 1;
        } else if (trick === 'treflip' && this.tricks.treflip === false && this.frustration >= 2) {
            this.frustration = 0;
            this.tricks.treflip = true;
            return 'I just learned to ' + trick + '!!!'
        }
    }
}
var tricks = {
    kickflip: true,
    treflip: false,
    bigSpin: false
}
var skater = new Skater({
    name: 'Jake',
    skill: 'Intermediate',
    tricks: tricks,
    cash: 20
});
var tricks = {
    kickflip: true,
    treflip: false,
    bigSpin: false
}
var skater = new Skater({
    name: 'Natalie',
    skill: 'Intermediate',
    tricks: tricks,
    cash: 20
});
module.exports = Skater;