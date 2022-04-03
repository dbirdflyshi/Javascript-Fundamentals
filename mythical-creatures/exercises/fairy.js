class Fairy{
    constructor(name, dust = 10){
        this.name = name;
        this.dust = dust;
        this.clothes = {dresses :['Iris']};
        this.disposition = 'Good natured';
        this.humanWards = [];
    }
    receiveBelief(){
        this.dust += 1;
    }
    believe(){
        this.dust += 10;
    }
    makeDresses(flowers){
        this.clothes.dresses = this.clothes.dresses.concat(flowers);
    }
    becomeProvoked(){
        this.disposition = 'Vengeful'
    }
    replaceInfant(infant){

        if (this.disposition === 'Vengeful'){
            var newInfant = infant;
            newInfant.disposition = 'Malicious';
            this.humanWards = [...this.humanWards,infant]
            if (this.humanWards.length >= 3){
                this.disposition = 'Good natured'
            }
            return newInfant;
        } else{
            return infant;
        }
    }
} 

module.exports = Fairy;