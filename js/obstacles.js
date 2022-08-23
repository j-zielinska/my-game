class Obstacle {
    constructor() {
        this.pos = createVector(random(width), random(height))
        this.size = (Math.random() * 10) *10 
        
        

    }

    draw() {
		this.pos
		image(game.obstacleImg, this.pos.x, this.pos.y, this.size , this.size )
	}

}