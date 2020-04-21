const PAIRED_POINTS = 10
const NOT_PAIRED_PENALTY = 1
const EXCEEDED_TIME_PENALTY = 1

class GamePunctuation {
    constructor() {
        this.points = 0
        this.sumedPoints = 0
        this.subtractedPoints = 0
        this.mistakes = 0
    }

    get getPoints(){return this.points}

    get getSumedPoints(){return this.sumedPoints}

    get getSubtractedPoints(){return this.subtractedPoints}

    get getMistakes() {return this.mistakes}

    mistake() {this.mistakes+=1}

    addPairedPoints(){
        this.points += PAIRED_POINTS
        this.sumedPoints += PAIRED_POINTS
    }

    substractNotPairedPenalty(){
        this.points -= NOT_PAIRED_PENALTY
        this.subtractedPoints += NOT_PAIRED_PENALTY
    }

    substractNotPairedPenaltyWithMistakes(){
        this.points -= NOT_PAIRED_PENALTY * this.mistakes
        this.subtractedPoints += NOT_PAIRED_PENALTY * this.mistakes
    }

    substractExceededTimePenalty(){
        this.points -= EXCEEDED_TIME_PENALTY 
        this.subtractedPoints += EXCEEDED_TIME_PENALTY
    }
}

export default GamePunctuation

