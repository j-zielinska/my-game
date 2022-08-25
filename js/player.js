class Player {
    constructor() {
        this.pos = new p5.Vector(300,300)
        this.height = 90
        this.width = 90  
        this.v
        this.angle = 0       
        this.life = 1000
        this.score = 0        
    }

    draw() {    
        angleMode(DEGREES) 

        if (dist(this.pos.x, this.pos.y, mouseX, mouseY) > 1){
            let dx =  mouseX - (this.pos.x )
            let dy =  mouseY - (this.pos.y )
            this.v = createVector(dx, dy) 

            this.angle = this.v.heading()              
            this.v.setMag(2)             
            this.pos.add(this.v) 
        }        
        

        push()
        translate (this.pos.x, this.pos.y)        
        rotate(this.angle)  
        image(game.playerImg, -this.width/2 ,  -this.height/2, this.width , this.height)
       
        pop()        
             
    }

    
        

    

}
