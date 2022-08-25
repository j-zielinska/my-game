
let stateInfo = true

let stateControls = true



document.querySelector('.btn-informations').addEventListener('click', informations) 
document.querySelector('.btn-controls').addEventListener('click', controls) 

function informations () {    
    stateInfo = !stateInfo
    stateControls = true
    if (stateInfo) {
        document.querySelector('.start').style.visibility = 'visible'
        document.querySelector('.controls').style.visibility = 'hidden'
        document.querySelector('.text').style.visibility = 'hidden'
    } else {
        document.querySelector('.start').style.visibility = 'hidden'
        document.querySelector('.controls').style.visibility = 'hidden'
        document.querySelector('.text').style.visibility = 'visible'
    }    
    console.log('Clicked')       
}

function controls () {    
    stateControls = !stateControls 
    stateInfo = true
    if (stateControls) {
        document.querySelector('.controls').style.visibility = 'visible'
        document.querySelector('.start').style.visibility = 'hidden'
        document.querySelector('.text').style.visibility = 'hidden'
    } else {
        document.querySelector('.controls').style.visibility = 'hidden'
        document.querySelector('.start').style.visibility = 'hidden'
        document.querySelector('.text').style.visibility = 'visible'
    }        
}





controls()

informations()

window.onkeydown = function(event){
    if(event.keyCode === 32) {
        event.preventDefault()
    }
    if(event.keyCode === ENTER) {
        event.preventDefault()
    }
}