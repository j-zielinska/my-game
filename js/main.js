let gameStart = 0


const game = new Game()



function preload() {

    game.preload()

}

function setup() {
    gameStart = 0    
    createCanvas(600, 600)
    strokeWeight(7);
    noCursor();
}

function draw() {
    if (gameStart === 0 ) {          
        game.background.draw()
        textSize(40)
        fill (255,255,255,127)
        textAlign(CENTER, TOP)
        text ('S T A R T', 0, 250, width)
        textSize(15)
        text ('Press E N T E R to start', 0, 300, width)
    }
    if (gameStart ===1) {
        cursor(CROSS)
         game.draw()
    }

    if (gameStart ===1 && game.player.score >= 30) {
        game.background.draw()
        textSize(40)
        fill (255,255,255,127)
        textAlign(CENTER, TOP)
        text ('you WON', 0, 250, width)
    }

    if (gameStart ===1 && game.player.life <= 0) {
        game.background.draw()
        textSize(40)
        fill (255,255,255,127)
        textAlign(CENTER, TOP)
        text ('you DIED', 0, 250, width)
    }
    

}


function keyPressed() {
    if (keyCode === 32) {        
        game.bullets.push(new Bullet(game.player.pos, mouseX, mouseY))
    }
    if (keyCode === 13){
        gameStart = 1
    }
}




