export default class Bombe  {

    constructor(x,y,i){
        this.x = x;
        this.y = y; 
        this.i = i;
    }

    pose(){
        let parent = document.getElementById('plateau');
        let b = document.createElement("div");
        
        b.classList.add("bombe");
        b.setAttribute("id", "b"+this.i);

        b.style.position="absolute";
        b.style.height="50px";
        b.style.width="50px";
        b.style.zIndex="2";
        b.style.backgroundImage="url('./assets/img/bombe.gif')";

        b.style.left= this.x+'px';
        b.style.top=this.y+'px';

        parent.appendChild(b);

        console.log(b);

        console.log('Bombe Posée en : '+ this.x +','+this.y);
       
    }

    explosion(){
        let b = document.getElementById('b'+this.i);
        b.style.backgroundImage="url('./assets/img/explosion.gif')";
        setTimeout(() => {
            b.style.display="none";
            b.remove();
        }, 800);
        
        
    }

}