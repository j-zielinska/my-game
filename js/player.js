class Player {
    constructor() {
        this.pos = new p5.Vector(300,300)
        this.height = 50
        this.width = 50       
        this.reach = 10
        this.gravity = .5
	    this.velocity 
        this.acceleration
        
    }

    draw() {    
        let dx =  mouseX - this.pos.x 
         let dy =  mouseY - this.pos.y


         

        this.velocity = createVector(dx, dy) 
        this.velocity.setMag(this.reach) 
    
        this.acceleration = createVector(mouseX - this.pos.x, mouseY - this.pos.y).setMag(0.2) // pryzspieszenie
        
        this.velocity.add(this.acceleration)
        this.velocity.limit(2)

      
        this.pos.add(this.velocity)
 
        image(game.playerImg, this.pos.x, this.pos.y, this.height , this.width)
       
        
       
    }


}
