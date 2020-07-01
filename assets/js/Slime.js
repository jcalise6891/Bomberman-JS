export default class Slime{
    constructor(div){
        this.div = div;
        this.div.style.left = 0;
        this.div.style.top = 0;
        this.left(this.rand(0,800,50));
        this.top(this.rand(0,800,50));
        this.lp = 1
        this.div.style.backgroundImage = "url('./assets/img/slime.gif')";
    }

    left(x){
        this.div.style.left = parseInt(this.div.style.left)+x+'px';
    }

    top(y){
        this.div.style.top = parseInt(this.div.style.top)+y+'px';
    }

    rand(min, max, step) {
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
}