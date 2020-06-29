let j1 = null;

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
    j1.style.position.left="0px";
    j1.style.position.top="0px";
}

// function move (key){

//     let key_code = key.code;

//     console.log('touche '+ key_code);

//     switch(key_code){
//         case 37: // Gauche
//             moveLeft();
//             break;
//         case 38: // Haut
//             moveUp();
//             break;
//         case 39: // Droit
//             moveRight();
//             break;
//         case 40: // Bas
//             moveDown();
//             break;
//     }
// }

function moveLeft(){
    j1.style.left =parseInt(j1.style.left)-50+'px';
}

function moveUp(){
    j1.style.left =parseInt(j1.style.top)-50+'px';
}

function moveRight(){
    j1.style.left =parseInt(j1.style.left)+50+'px';
}

function moveDown(){
    j1.style.left =parseInt(j1.style.top)+50+'px';
}


