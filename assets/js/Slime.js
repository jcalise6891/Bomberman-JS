import {rand,left,top} from "./Function.js";

export default class Slime{

    constructor(div){
        this.div = div;
        this.div.style.left = 0;
        this.div.style.top = 0;
        this.x = left(div,rand(0,800,50));
        this.y = top(div,rand(0,800,50));
        this.lp = 1;
        this.div.style.backgroundImage = "url('./assets/img/slime.gif')";
    }

}