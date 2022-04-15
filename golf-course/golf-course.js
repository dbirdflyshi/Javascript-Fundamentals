class GolfCourse {
    constructor(name,difficulty, openings, features){
        this.name = name;
        this.difficulty = difficulty;
        this.openings = openings;
        this.features = features;
        this.currentlyPlaying = [];
    }
    checkInGroup(group){
        if(group.length < this.openings){ // there is space for the group
            for(let i = 0; i < group.length; i++){
                this.currentlyPlaying.unshift(group[i].name);
            }
            this.openings -= group.length;
            return "You're checked in. Have fun!"
        } else{
            return "Sorry, we are currently booked! Please come back later."
        }
    }
}

module.exports = GolfCourse;
