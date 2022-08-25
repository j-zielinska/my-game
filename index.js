
let stateInfo = true
let stateControls = true

document.querySelector('.btn-informations').addEventListener('click', informations) 
document.querySelector('.btn-controls').addEventListener('click', controls) 

function informations () {    
    stateInfo = !stateInfo
    
    if (stateInfo) {
        stateControls = false
        document.querySelector('.btn-informations').style.backgroundColor = 'grey'
        document.querySelector('.btn-controls').style.backgroundColor = ''
        document.querySelector('.start').style.visibility = 'visible'
        document.querySelector('.controls').style.visibility = 'hidden'
        document.querySelector('.text').style.visibility = 'hidden'
    } else {        
        document.querySelector('.btn-informations').style.backgroundColor = ''
        document.querySelector('.start').style.visibility = 'hidden'
        document.querySelector('.controls').style.visibility = 'hidden'
        document.querySelector('.text').style.visibility = 'visible'
    }    
 
}

function controls () {    
    stateControls = !stateControls 
    
    if (stateControls) {
        stateInfo = false
        document.querySelector('.btn-controls').style.backgroundColor = 'grey'
        document.querySelector('.btn-informations').style.backgroundColor = ''
        document.querySelector('.controls').style.visibility = 'visible'
        document.querySelector('.start').style.visibility = 'hidden'
        document.querySelector('.text').style.visibility = 'hidden'
    } else {        
        document.querySelector('.btn-controls').style.backgroundColor = ''
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