class Bullet {

    constructor(v,x,y) {
        this.pos = new p5.Vector(v.x,v.y)    
        this.direction = new p5.Vector(0,0)
        this.currentX = x
        this.currentY = y
        this.speed = 5
        this.r = 3
        //this.acc = new p5.Vector(0,0)
      
        this.angle = 0.0
        this.v // vector of the player
       
    }

    draw(){                    
       
        
        push()
        translate (this.pos.x, this.pos.y)               
        fill (255,255,255)
        stroke (255,255,255)
        circle (0 ,0, this.r )
        pop()
        let vector = createVector(this.currentX - this.pos.x, this.currentY - this.pos.y )
        this.angle = vector.heading() 
        this.direction = p5.Vector.fromAngle(radians(this.angle), this.speed)
        this.pos.add(this.direction)
    }   
    
}