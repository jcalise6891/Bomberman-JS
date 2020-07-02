import {rand,left,top} from "./Function.js";

export default class Player{
   
    constructor(div){
        this.div = div;
        this.div.style.left = 0;
        this.div.style.top = 0;
        this.div.style.backgroundImage="url('./assets/img/bomberman_idle.png')";
        this.lp = 1;
    }

}