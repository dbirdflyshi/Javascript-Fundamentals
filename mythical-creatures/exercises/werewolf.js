class Werewolf {
    constructor(name, form = 'human', hungry = false){
        this.name = name;
        this.form = form;
        this.hungry = hungry;
    }
    completeTransformation(){
        if (this.form === 'human'){
            this.form = 'wolf'
            this.hungry = true
            return 'Aaa-Woooo!';
        } else{
            this.form = 'human'
            this.hungry = false
            return 'Where are I?';
        }
    }
    eatVictim(victim){
        if ( this.form === 'wolf' ) { 
            victim.alive = false
            this.completeTransformation()
            return 'Yum, Hannah was delicious.'
        } else{
            return "No way am I eating "+victim.name+", I'd like a burger!"
        }
    }
}

module.exports = Werewolf;