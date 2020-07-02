import  Slime   from   "./Slime.js";
import  Player  from   "./Player.js"; 
import  {rand}   from  "./Function.js";   
import Bombe from "./Bombe.js";
                                                        
let horde       = [];                                                            // Tableau contenant les différentes div ennemies  
let j1          = null;
let i           = null;

let footstep    = new Audio("./assets/sound/sfx_footstep.wav");
let wall        = new Audio('./assets/sound/sfx_wall.wav');

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

            case 32 : // Espace - Bombe
            
                j1[i] = new Bombe(j1.x, j1.y,i);
                j1[i].pose();

                let Fexp = function(j1,i){
                    j1[i].explosion();
                }


                console.log('A item :'+j1[i]+'Incrément de bombe : '+i);
                setTimeout(Fexp, 3000,j1,i);
               
                
                break;            
            case 37: // Gauche
                moveLeft(j1.div);
                break;
            case 38: // Haut
                moveUp(j1.div);
                break;
            case 39: // Droit
                moveRight(j1.div);
                break;
            case 40: // Bas
                moveDown(j1.div);
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

     j1 = new Player(document.getElementById('player'));
     i = 0;

    for(let i = 0; i < 6; i++ )
    { 
        horde[i] = new Slime(document.getElementById('e'+(i+1)));
        console.log(horde[i]);
    }
}
//========================================================================================= Methode de mouvement des entitées =======================
function moveLeft(div){
    if(parseInt(div.style.left) > 0){
        div.style.left =parseInt(div.style.left)-50+'px';
        if (div == j1.div){
            j1.div.style.backgroundImage = "url('./assets/img/bomberman_left.png')";
            footstep.play();
        }    
    }
    else if(div == j1.div){
        wall.play();
    }
}

function moveUp(div){
    if(parseInt(div.style.top) > 0){
        div.style.top =parseInt(div.style.top)-50+'px';
        if (div == j1.div){
            j1.div.style.backgroundImage = "url('./assets/img/bomberman_top.png')";
            footstep.play();
        }    
    }
    else if(div == j1.div){
        wall.play();
    }
}

function moveRight(div){
    if(parseInt(div.style.left) < 750){
        div.style.left =parseInt(div.style.left)+50+'px';
        if (div == j1.div){
            j1.div.style.backgroundImage = "url('./assets/img/bomberman_right.png')";
            footstep.play();
        }    
    }
    else if(div == j1.div){
        wall.play();
    }
}

function moveDown(div){
    if(parseInt(div.style.top) < 750){
        div.style.top =parseInt(div.style.top)+50+'px';
        if (div == j1.div){
            j1.div.style.backgroundImage = "url('./assets/img/bomberman_down.png')";
            footstep.play();
        }    
    }
    else if(div == j1.div){
        wall.play();
    }
}