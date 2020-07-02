export function rand(min, max, step){

                                   
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
export function left(entity,x){
    entity.style.left = parseInt(entity.style.left)+x+'px';
}

 export function top(entity,y){
    entity.style.top = parseInt(entity.style.top)+y+'px';
}