class Player2 {
    constructor() {
        this.pos = new p5.Vector(0,0)
        this.height = 50
        this.width = 50       
        this.reach = 10
        this.gravity = .5
	    this.velocity 
        this.acceleration
        
    }

    draw() {  

        angleMode(DEGREES)
        translate (400,400)
        let dx =  mouseX - (this.pos.y + this.height/2)
        let dy =  mouseY - (this.pos.x + this.width/2)
        
        
        let angle = atan2(dy, dx)
        
        rotate(angle) 
        


         

       
 
        image(game.playerImg, this.pos.x, this.pos.y, this.height , this.width)
       
        
       
    }


}