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
    if (gameStart === 0) {         
        
        text ('Press ENTER', 250, 280)
        
    }
    if (gameStart ===1) {
        cursor(CROSS)
         game.draw()
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


