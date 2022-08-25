class Obstacle {
    constructor(v, size) {
               
        this.vel = p5.Vector.random2D()
        
        if(v) {
            this.pos = v      
        } else {
            this.pos = createVector(random(width), random(height))            
        } 
        if (size) {        
        this.size = size
        } else {
            this.size = (Math.floor(Math.random() * 3) + 2 )*20
        }                
        this.rotateAngle = 0.0     
          

    }

    draw() {
		this.rotateAngle += .8             
        this.pos.add(this.vel)
        push()
        translate(this.pos.x,this.pos.y)
        rotate(this.rotateAngle)
		image(game.obstacleImg, -this.size/2, -this.size/2, this.size , this.size )        
        pop()
	}

    

    hit(playerInfo) {

        let ateroidX = this.pos.x + this.size / 2
		let asteroidY = this.pos.y + this.size/ 2	
		let playerX = playerInfo.pos.x + playerInfo.width / 2
		let playerY = playerInfo.pos.y + playerInfo.height / 2
		if (dist(ateroidX, asteroidY, playerX, playerY) > 40) {
			return false
		} else {				
			game.player.life -= 100          
			return true
		}
    }

    shutdown(bulletInfo) {

        let ateroidX = this.pos.x 
		let asteroidY = this.pos.y 	
		let bulletX = bulletInfo.pos.x 
		let bulletY = bulletInfo.pos.y 
		if (dist(ateroidX, asteroidY, bulletX, bulletY) > 30) {
			return false
		} else {              
           game.player.score ++       
			return true
		}
    }

    explode(v) {        
        let newAsteroids = []
        newAsteroids[0] = new Obstacle (v, 30)
        newAsteroids[1] = new Obstacle (v, 50)
        return newAsteroids
    }   
}