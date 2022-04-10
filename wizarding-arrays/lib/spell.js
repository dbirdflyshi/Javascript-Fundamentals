const Cabinet = require("./cabinet");

class Spell{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.executionHistory = [];
        this.outputChain = [];
    }
    execute(target){
        this.executionHistory = this.executionHistory.concat(target)
        for (let i = 0; i < this.executionHistory.length; i++ ){
            if (i === this.executionHistory.length-1){
                this.outputChain.push("Success! You've cast a spell on the " + this.executionHistory[i] + ".")
            }else{
                this.outputChain.push("Success! You've cast a spell on the " + this.executionHistory[i]+". ")
            }
        }
        return this.outputChain.join('');
    }
    clearExecutionHistory(){
        this.executionHistory = ''
    }
}


module.exports = Spell;