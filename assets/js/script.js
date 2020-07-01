import Slime from "./Slime.js";


let j1          = null;                                                            // Div Joueur
let ennemies    = [];                                                              // Tableau contenant les différentes div ennemies
let horde       = [];

let inter       = null;    

let footstep    = new Audio("./assets/sound/sfx_footstep.wav");
let wall        = new Audio('./assets/sound/sfx_wall.wav');

// let slime = {
//     x:      0,
//     y:      0,
//     lp:     0,
//     div: null,

//     left: function(left){
//         this.div.style.left = parseInt(this.div.style.left)+left+'px';
//     },
//     top:function(top){
//         this.div.style.top = parseInt(this.div.style.top)+top+'px';
//     }

// }

// let j1 = {

//     x:  0,
//     y:  0,
//     lp: 0,
//     div: document.getElementById('player'),

//     left: function(left){
//         this.div.style.left = parseInt(this.div.style.left)+left+'px';
//     },
//     top:function(top){
//         this.div.style.top = parseInt(this.div.style.top)+top+'px';
//     }

// }

wall.volume     = 0.05;
footstep.volume = 0.05;

window.onload=init;

document.getElementById('start').addEventListener("click", function(){            // Déplacement Joueur

    this.style.display="none";
    document.getElementById('overlay').style.display="none";

    let _listener = function(Event){                                              // Ta mère le concombre, cordialement, saleté d'AddEventListener... 

        let key_code = Event.keyCode;
    
        console.log('touche '+ key_code);
    
        switch(key_code){
            case 37: // Gauche
                moveLeft(j1);
                break;
            case 38: // Haut
                moveUp(j1);
                break;
            case 39: // Droit
                moveRight(j1);
                break;
            case 40: // Bas
                moveDown(j1);
                break;
        }
    
    }

    window.addEventListener("keydown", _listener)                                 // Déplacement Monstre

    let inter = setInterval(() => {

        let mv = rand(1,6,1);
        let e = rand(0,6,1);

        switch (mv){
            case 1:
                moveUp(horde[e].div);
                break;
            case 2:
                moveDown(horde[e].div);
                break;
            case 3:
                moveLeft(horde[e].div);
                break;
            case 4:
                moveRight(horde[e].div);
                break;
        }
            
    }, 200);

    document.getElementById('stop').addEventListener("click", function(){

        clearInterval(inter);
        window.removeEventListener("keydown", _listener);
        document.getElementById('overlay').style.display="block";
        document.getElementById('start').style.display="block";
    
    },true);

    document.getElementById('reset').addEventListener("click", function(){

        clearInterval(inter);
        window.removeEventListener("keydown", _listener);
        document.getElementById('overlay').style.display="block";
        document.getElementById('start').style.display="block";
    
    },true);

    document.getElementById('reset').addEventListener("click",init);

    
});


//---------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------- Methodes ------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------

function init(){                                                       // Initialise Le plateau de jeu Ainsi que la position des différentes entitées

    j1 = document.getElementById('player');
    j1.style.left="0px";
    j1.style.top="0px";
    j1.style.backgroundImage="url('./assets/img/bomberman_idle.png')";

    for(let i = 0; i < 6; i++ )
    { 

        horde[i] = new Slime(document.getElementById('e'+(i+1)));
        console.log(horde[i]);

        // horde[i]                            = Object.create(slime);
        // horde[i].div                        = document.getElementById('e'+(i+1));

        // horde[i].div.style.backgroundImage  ="url('./assets/img/slime.gif')";

        // horde[i].div.style.left             ="0px";
        // horde[i].div.style.top              ="0px";

        // horde[i].left(rand(0,800,50));
        // horde[i].top(rand(0,800,50));

        // horde[i].lp = 1;
    }
}
//========================================================================================= Methode de mouvement des entitées =======================
function moveLeft(div){
    if(parseInt(div.style.left) > 0){
        div.style.left =parseInt(div.style.left)-50+'px';
        if (div == j1){
            j1.style.backgroundImage = "url('./assets/img/bomberman_left.png')";
            footstep.play();
        }    
    }
    else if(div == j1){
        wall.play();
    }
}

function moveUp(div){
    if(parseInt(div.style.top) > 0){
        div.style.top =parseInt(div.style.top)-50+'px';
        if (div == j1){
            j1.style.backgroundImage = "url('./assets/img/bomberman_top.png')";
            footstep.play();
        }    
    }
    else if(div == j1){
        wall.play();
    }
}

function moveRight(div){
    if(parseInt(div.style.left) < 750){
        div.style.left =parseInt(div.style.left)+50+'px';
        if (div == j1){
            j1.style.backgroundImage = "url('./assets/img/bomberman_right.png')";
            footstep.play();
        }    
    }
    else if(div == j1){
        wall.play();
    }
}

function moveDown(div){
    if(parseInt(div.style.top) < 750){
        div.style.top =parseInt(div.style.top)+50+'px';
        if (div == j1){
            j1.style.backgroundImage = "url('./assets/img/bomberman_down.png')";
            footstep.play();
        }    
    }
    else if(div == j1){
        wall.play();
    }
}

//===================================================================================================================================================

function rand(min, max, step) {                                 // Méthode qui retourne un chiffre aléatoire selon le min, le max et la pas
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