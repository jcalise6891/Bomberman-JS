let j1 = null;
let footstep = new Audio("./assets/sound/sfx_footstep.wav");
let wall = new Audio('./assets/sound/sfx_wall.wav');

wall.volume = 0.05;
footstep.volume = 0.05;

window.onload=init;

window.addEventListener("keydown",function(Event){

    let key_code = Event.keyCode;

    console.log('touche '+ key_code);

    switch(key_code){
        case 37: // Gauche
            moveLeft();
            break;
        case 38: // Haut
            moveUp();
            break;
        case 39: // Droit
            moveRight();
            break;
        case 40: // Bas
            moveDown();
            break;
    }

});

function init(){
    j1 = document.getElementById('player');
    j1.style.left="0px";
    j1.style.top="0px";
    j1.style.backgroundImage="url('./assets/img/bomberman_idle.png')"
}

function moveLeft(){
    if(parseInt(j1.style.left) > 0){
    footstep.play();
    j1.style.left =parseInt(j1.style.left)-50+'px';
    j1.style.backgroundImage = "url('./assets/img/bomberman_left.png')";
    }
    else{
        wall.play();
    }
}

function moveUp(){
    if(parseInt(j1.style.top) > 0){
        footstep.play();
        j1.style.top =parseInt(j1.style.top)-50+'px';
        j1.style.backgroundImage = "url('./assets/img/bomberman_top.png')";
    }
    else{
        wall.play();
    }
}

function moveRight(){
    if(parseInt(j1.style.left) < 750){
        footstep.play();    
        j1.style.left =parseInt(j1.style.left)+50+'px';
        j1.style.backgroundImage = "url('./assets/img/bomberman_right.png')";
    }
    else{
        wall.play();
    }
}

function moveDown(){
    if(parseInt(j1.style.top) < 750){
        footstep.play();
     j1.style.top =parseInt(j1.style.top)+50+'px';
     j1.style.backgroundImage = "url('./assets/img/bomberman_down.png')";
    }
    else{
        wall.play();
    }
}


