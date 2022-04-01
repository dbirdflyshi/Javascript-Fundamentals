class Centaur{
    constructor(chars = {
                         name : centaurName,
                         type : type
                        }){
        this.name = chars.centaurName;
        this.breed = chars.type;
        this.cranky = false;
        this.standing = true;
        this.activityCounter = 0;
        this.layingDown = false;
    }
    shootBow(){
        if((this.activityCounter < 2) && (this.layingDown === false)){
            this.activityCounter += 1;
            return 'Twang!!!';
        }else{
            this.cranky = true;
            return 'NO!';
        }
    }
    run(){
        if ((this.activityCounter < 2) && (this.layingDown === false)) {
            this.activityCounter += 1;
            return 'Clop clop clop clop!!!';
        } else {
            this.cranky = true;
            return 'NO!';
        }
    }
    sleep(){
        if(this.layingDown === false){
            return 'NO!';
        } else{
            this.cranky = false;
            this.activityCounter = 0;
            return 'ZZZZ';
        }
    }
    layDown(){
        if(this.standing === true){
            this.standing = false;
            this.layingDown = true;
        }
    }
    standUp(){
        if (this.layingDown === true){
            this.standing = true;
            this.layingDown = false;
        }
    }
    drinkPotion(){
        if(this.standing === true){
            this.cranky = false;
            this.activityCounter = 0;
        } else{
            return 'Not while I\'m laying down!'
        }
    }

    
}

module.exports = Centaur;