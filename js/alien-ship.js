class Alien {
    constructor () {
        
        this.x = Math.floor(Math.random()* 600)
        if (this.x < 100 || this.x > 500){
            this.y = Math.floor(Math.random()* 600)
        } else  {
            this.y = Math.floor(Math.random()*100) 
        }
        this.pos = new p5.Vector(this.x, this.y)        

        this.width = 50
        this.hieght = 50
        this.speed = 1.5
        
    }

    draw (){
       
        let dx =  game.player.pos.x - (this.pos.x )
        let dy =  game.player.pos.y - (this.pos.y )   

        this.v = createVector(dx, dy)             

        this.v.setMag(this.speed)            
        this.pos.add(this.v) 
               
        image(game.alienImg, this.pos.x ,  this.pos.y ,  this.width, this.hieght)
        
    }

    hit(playerInfo) {        
		let playerX = playerInfo.pos.x //+ playerInfo.width / 2
		let playerY = playerInfo.pos.y //+ playerInfo.height / 2
		if (dist(this.pos.x + this.width / 2, this.pos.y + this.hieght / 2, playerX, playerY) > 40) {
			return false
		} else {				
			game.player.life -= 200         
			return true
		}
    }

    shutdown(bulletInfo) {
   	
		let bulletX = bulletInfo.pos.x 
		let bulletY = bulletInfo.pos.y 
		if (dist(this.pos.x + this.width / 2, this.pos.y + this.hieght / 2, bulletX, bulletY) > 20) {
			return false
		} else {              
           game.player.score += 2			          
		return true
		}
    }
    
}