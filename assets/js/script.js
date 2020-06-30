let j1          = null;
let b           = null;
let ennemies    = [];

let footstep    = new Audio("./assets/sound/sfx_footstep.wav");
let wall        = new Audio('./assets/sound/sfx_wall.wav');

wall.volume     = 0.05;
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
    j1.style.backgroundImage="url('./assets/img/bomberman_idle.png')";

    for(let i = 0; i < 6; i++ )
    {     
        ennemies[i] = document.getElementById('e'+(i+1));

        ennemies[i].style.backgroundImage="url('./assets/img/slime.gif')";

        ennemies[i].style.left="0px";
        ennemies[i].style.top="0px";        
 
        ennemies[i].style.left =parseInt(ennemies[i].style.left)+rand(0,800,50)+'px';
        ennemies[i].style.top =parseInt(ennemies[i].style.top)+rand(0,800,50)+'px';
       
    }

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

function rand(min, max, step) {
    let delta,
        range,
        rand;
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }
    if (!step) {
        step = 1;
    }
    delta = max - min;
    range = delta / step;
    rand = Math.random();
    rand *= range;
    rand = Math.floor(rand);
    rand *= step;
    rand += min;
    return rand;
}


