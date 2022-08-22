class Bullet {

    constructor() {
        this.pos = new p5.Vector(300,300)    
        this.direction  // vector
        this.lenght = 1
        this.r = 10
        this.move = new p5.Vector(0,0) // vector of the movement
        this.moveY = 0 
        this.x = 0
        this.y = 0
        this.angle = 0.0
       
    }

    draw(){       
        angleMode(DEGREES) 


        this.direction = createVector(mouseX - (this.pos.x ),  mouseY - (this.pos.y )) 
        this.direction.setMag(this.lenght)
        this.angle = this.direction.heading()


        
       // this.velocity = createVector(dx, dy) 
       // this.velocity.setMag(1)
        this.pos.add(this.move)
        //this.x = this.pos.x  + this.move
        //this.y = this.pos.y  + this.moveY
        
        fill (255,255,255)
        circle (this.pos.x ,this.pos.y, this.r = 10)
        
    }   

    shut() {

        console.log(this.angle)
        console.log(this.direction)
        //this.direction = p5.Vector.fromAngle(radians(this.angles))
        //this.direction = p5.Vector.formAngle(this.angle)
        this.move.add(this.direction) 
        // }

        // if ((this.angle ) >= 0 &&  (this.angle ) <= 90 ) {
        //     this.move.add(this.direction) 
        // }
        // if ( (this.angle) > 90 &&  (this.angle ) <= 180  ) {
        //     this.moveY ++
        //     this.moveX --
        // }
        // if ((this.angle) > 180 &&  (this.angle ) <= 270  ) {
        //     this.moveY --
        //     this.moveX --
        // }
        // if ((this.angle ) > 270 &&  (this.angle ) < 360  ) {
        //     this.moveY --
        //     this.moveX ++
        // } if ((this.angle ) === 0) {
        //     this.moveX = 0;
        //     this.moveY = -6
        // }

        
        

        
        
       
    }


}