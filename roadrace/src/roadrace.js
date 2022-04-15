var Runner = require("../src/runner.js");

class Roadrace {
    constructor(objs){
        this.name = objs.title;
        this.location = objs.city;
        this.distance = objs.distance || 0;
        this.participants = [];
    }

    setDistance(miles){
        this.distance += miles;
        return 'The '+this.name+' in '+this.location+' is a '+this.distance+' mile race.'
    }

    registerParticipants(runner){
        this.participants.push(runner);
    }

    completeRace(){
        for(let i = 0; i < this.participants.length ; i++){
            this.participants[i].runRace(this.title,this.distance);
        }
    }
}

module.exports = Roadrace;
