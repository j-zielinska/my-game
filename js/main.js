const game = new Game()

function preload() {
    game.preload()

}

function setup() {
    createCanvas(600, 600)
}

function draw() {
    game.draw()

}

// function keyPressed() {
// 	if (keyCode === 32) {
//        // if(0 < game.player.y <600 -50 &&  0 < game.player.x < 600 -50 ) {		
        
//         game.player.draw()
//         //}
// 	}
//}