class Player {
    constructor() {
        this.pos = new p5.Vector(300,300)
        this.height = 50
        this.width = 50       
        this.reach = 10        
	    this.velocity 
        this.acceleration
        this.angle = 0
        
    }

    draw() {    
        angleMode(DEGREES) 
        let dx =  mouseX - (this.pos.x + this.width/2)
        let dy =  mouseY - (this.pos.y + this.height/2)
         

        this.velocity = createVector(dx, dy) 
        this.velocity.setMag(this.reach) 
    
        this.acceleration = createVector(mouseX - this.pos.x, mouseY - this.pos.y).setMag(0.2) 
        
        this.velocity.add(this.acceleration)
        this.velocity.limit(2)

      
        this.pos.add(this.velocity)

        translate (this.pos.x, this.pos.y)
        this.angle = this.velocity.heading()    
        rotate(this.angle) 



 
        image(game.playerImg, this.pos.x - this.width/2 , this.pos.y - this.height/2, this.width , this.height)
       
        
       
    }


}
