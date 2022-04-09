class Sphinx{
    constructor(name = null){
        this.name = name;
        this.riddles = [];
        this.answersCorrect = 0;
        this.heroesEaten = 0;
    }
    collectRiddle(riddle){
        if (this.riddles.length < 3){
            this.riddles.push(riddle)
        }else{
            this.riddles.shift();
            this.riddles.push(riddle);
        }
    }
    attemptAnswer(answer){
        if (this.riddles.some(e => e.answer === answer)){
            // getting the index of the answer
            const index = this.riddles.findIndex(obj => obj.answer === answer);
            // removing the item with the index found above
            this.riddles = [...this.riddles.slice(0, index), ...this.riddles.slice(index + 1)]
            if (this.riddles.length === 0) {
                return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"' + answer + '"???'
            }else{
                return 'That wasn\'t that hard, I bet you don\'t get the next one'
            }
        } else{
            this.heroesEaten +=1
        }
    }
}


module.exports = Sphinx;
