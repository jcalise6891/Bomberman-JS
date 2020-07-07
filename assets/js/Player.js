import {rand,left,top} from "./Function.js";

export default class Player{
   
    constructor(div){
        this.bombe = [];
        this.div = div;
        this.div.style.left = 0;
        this.div.style.top = 0;
        this.x = parseInt(this.div.style.left);
        this.y = parseInt(this.div.style.top);
        this.div.style.backgroundImage="url('./assets/img/bomberman_idle.png')";
        this.lp = 5;
    }

}