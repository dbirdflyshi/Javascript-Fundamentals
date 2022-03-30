class Pirate {
    constructor (pirateName, jobName = 'scallywag', curseStatus = false, bootyCount = 0){
        this.name = pirateName;
        this.job = jobName;
        this.cursed = curseStatus;
        this.booty = bootyCount;
    }
    robShip(){
        if (this.booty < 500 ){
            this.booty += 100;
            return 'YAARRR!';
        } else {
            this.cursed = true;
            return 'ARG! I\'ve been cursed!';
        }
    }

    liftCurse(){
        if (this.cursed === true){
            this.booty -= 300;
            this.cursed = false;
            return 'Your curse has been lifted!'
        } else {
            return 'You don\'t need to lift a curse!'
        }
    }
}

module.exports = Pirate