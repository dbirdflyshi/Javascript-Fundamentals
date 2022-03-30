class Hobbit {
    constructor(hobbitName, hobbitAge = 0){
        this.name = hobbitName.name;
        this.age = hobbitAge;
        this.old = false
        this.adult = false
        this.hasRing = false
    }
    celebrateBirthday(){
        this.age += 1
        if ( this.age < 33 ) {

        } else if ( ( this.age > 32) && ( this.age <= 101) ) {
            this.adult = true
        } else {
            this.old = true
        }
    }

    getRing(){
        if (this.name === 'Frodo'){
            this.hasRing = true
            return 'Here is the ring!'
        } else {
            return 'You can\'t have it!'
        }
    }
}

// var hobbit = new Hobbit({ name: 'Taylor' });

// function timeTravel(num, hobbit) {
//     for (var i = 0; i < num; i++) {
//         hobbit.celebrateBirthday();
//     };
// };
// timeTravel(100, hobbit);
// hobbit.celebrateBirthday();

// console.log(hobbit.age)
// console.log(hobbit.adult)
// console.log(hobbit.old)


module.exports = Hobbit