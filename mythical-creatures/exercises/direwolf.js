class Direwolf{
    constructor(name, home = 'Beyond the Wall', size = 'Massive'){
        this.name = name;
        this.home = home;
        this.size = size;
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
    }
    protect(stark){
        if ( (stark.location === this.home) && (this.starksToProtect.length < 2) ){
            this.starksToProtect = [...this.starksToProtect, stark];
            stark.safe = true;
            this.huntsWhiteWalkers = false;
        } 
    }
    leave(stark){
        this.starksToProtect.splice(this.starksToProtect.indexOf(stark),1);
        stark.safe = false;
        this.huntsWhiteWalkers = true;
    }
}

module.exports = Direwolf;