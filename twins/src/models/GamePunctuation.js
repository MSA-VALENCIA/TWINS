const PAIRED_POINTS = 5
const NOT_PAIRED_PENALTY = 2
const EXCEEDED_TIME_PENALTY = 1

class GamePunctuation {
    constructor() {
        this.points = 0
        this.sumedPoints = 0
        this.subtractedPoints = 0
    }

    get getPoints(){return this.points}

    get getSumedPoints(){return this.sumedPoints}

    get getSubtractedPoints(){return this.subtractedPoints}

    addPairedPoints(){this.points += PAIRED_POINTS;this.sumedPoints += PAIRED_POINTS}

    substractNotPairedPenalty(){this.points -= NOT_PAIRED_PENALTY;this.subtractedPoints += NOT_PAIRED_PENALTY}

    substractExceededTimePenalty(){this.points -= EXCEEDED_TIME_PENALTY;this.subtractedPoints += EXCEEDED_TIME_PENALTY}
    

}

export { GamePunctuation };

