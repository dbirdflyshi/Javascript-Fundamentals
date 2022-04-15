var Roadrace = require("../src/roadrace.js");

class Runner {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.milesRun = 0;
        this.fitness = 25;
        this.completedRaces = [];
    }

    runSomeMiles(miles) {
        this.milesRun += miles;
        this.fitness += miles;
    }
    stretch() {
        this.fitness += .5;
    }
    runRace(race,miles){
        //var race = new Roadrace({title:race, distance:miles});
        this.completedRaces.push(race);
        this.runSomeMiles(miles);
    }
}

module.exports = Runner;
