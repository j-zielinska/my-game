class LifeScore {
    constructor() {
        this.x = 20
        this.y = 20
        this.width = 155
        this.hieght = 15
        this.r = 4
        this.pointX = this.x + 2.5
        this.pointY = this.y + 2.5        
        this.pointH = this.hieght -5
        this.pointR = 2

        this.lifeW = this.width - 5
        this.scoreW = 0
        this.score = 0
        

    }

    draw() {
        textSize(15);
        stroke (255,255,255,127)
        strokeWeight(1);
        fill(255,255,255,63)
        rect (this.x, this.y,this.width , this.hieght, this.r  ) // life bar
        text('L I F E', this.x, this.y + 30);
        let length = width - this.width - this.x
        rect (length, this.y, this.width , this.hieght, this.r ) // score bar
        text('S C O R E :', width - this.width - this.x, this.y + 30);
        text(this.score, width - 15 - this.x, this.y + 30);


        fill(175,238,238)
        rect (this.pointX, this.pointY, this.lifeW , this.pointH, this.lpointR )      // life       
        

        fill(255,255,255,63)        
        length = width - this.width - this.x + 2.5
        fill(250,128,114)
        rect (length, this.pointY, this.scoreW , this.pointH, this.lpointR )  // score
        
    }

    addPoint() {
        this.scoreW += 5 // 150/5 => 30 points to win
        this.score ++
    }

    reduceLife() {
        this.lifeW -= 15
    }


}