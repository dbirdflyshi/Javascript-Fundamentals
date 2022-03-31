class Person {
    constructor(personName, moodType = 'frightened') {
        this.name = personName;
        this.mood = moodType;
    }
};
module.exports = Person