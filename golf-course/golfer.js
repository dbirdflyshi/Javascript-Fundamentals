class Golfer {
    constructor(objs){
        this.name = objs.name;
        this.handicap = objs.handicap;
        this.frustration = 0;
        this.confidence = 0;
    }
    calculateAvg(score){
        var avgScore = score + this.handicap
        return 'I usually shoot a ' + avgScore +' on average.'
    }
    playRound(course){
        if (course.difficulty === 'moderate'){
            this.frustration += 100;
        } else if (course.difficulty === 'hard'){
            this.frustration += 500;
        }
    }
    hitTheRange(){
        this.confidence += 10;
    }
    marvel(course){
        var marvel = 'I love the '
        for(let i = 0; i < course.features.length; i++){
            if(i === course.features.length -1){
                marvel += ' and '+course.features[i]+ ' on this course!';
            } else{
                marvel += course.features[i]
            }
        }
        return marvel;
    }
    whatYaShoot(score){
        if(score > 0){
            this.frustration+= 20;
            return 'Doh!'
        } else if(score === 0){
            this.frustration-=10
            return 'Booyah!'
        } else{
            this.frustration = 0;
            return 'I AM THE GREATEST GOLFER ALIVE!'
        }
    }
}

module.exports = Golfer;
