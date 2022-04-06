class Human {
    constructor(name){
        this.name = name;
        this.encounterCounter = 0;
        this.noticedOgre = false;
        this.ogre = null;
        this.knockedOut = false;
    }

    encounterOgre(ogre) {
        this.ogre = ogre;
        this.encounterCounter += 1;
        this.noticesOgre();
        if ((this.ogre.swings % 2 === 0) && (this.ogre.swings != 0)) {
            this.knockedOut = true;
        } else {
            this.knockedOut = false;
        }
    } 

    noticesOgre(){
        if ((this.encounterCounter != 0) && (this.encounterCounter % 3 === 0)){
            this.noticedOgre = true;
            this.ogre.swingAt()
            return true 
        } else{
            this.noticedOgre = false;
            return false
        }
    }
}

module.exports = Human;