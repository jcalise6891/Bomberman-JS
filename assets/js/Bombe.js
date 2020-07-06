export default class Bombe  {

    constructor(x,y){
 
        this.div
        this.x = x;
        this.y = y; 
    }

    pose(){
        let parent = document.getElementById('plateau');
        let b = document.createElement("div");
        
        b.classList.add("bombe");

        b.style.position="absolute";
        b.style.height="50px";
        b.style.width="50px";
        b.style.zIndex="2";
        b.style.backgroundImage="url('./assets/img/bombe.gif')";

        b.style.left= this.x+'px';
        b.style.top=this.y+'px';

        parent.appendChild(b);

      //  console.log(b);

      //  console.log('Bombe Posée en : '+ this.x +','+this.y);

        this.div = b;
       
    }

    explosion(horde,player,t){
        let tb = [...document.getElementsByClassName('bombe')];
        let h = horde;
       // console.log(h);
        let p = player;
       //console.log(p);
        let b = this.div;
        b.style.height="150px";
        b.style.width="150px";
        b.style.transform="translate(-50px,-50px)";
        b.style.backgroundImage="url('./assets/img/explosion.gif')";
        
        // setTimeout(() => {
            // console.log(b);

            h.forEach(element=>{
                if(( element.x >=  (this.x-50) && element.x <= (this.x+50)  ) && ( element.y >=  (this.y-50) && element.y <= (this.y+50))){
                    console.log('le monstre '+element.div.id+' qui avait '+element.lp+' point de vie à été touché');
                   if(element.lp > 0){
                        element.lp--;
                        if(element.lp <= 0){
                            element.div.style.display="none";
                            element.div.remove();
                        }
                   }                 
                    console.log(element.lp)
                    
                    console.log(this);
                }
            });

            b.style.display="none";
            b.remove();
            p.bombe.shift();
        // }, 800);       
    }

}