
const stars=document.getElementById("stars");

for(let i=0;i<90;i++){

const s=document.createElement("div");

s.className="star";

const size=Math.random()*5+2;

s.style.width=size+"px";

s.style.height=size+"px";

s.style.left=Math.random()*100+"%";

s.style.top=Math.random()*100+"%";

s.style.animationDuration=

(Math.random()*2+1)+"s";

stars.appendChild(s);

}



const btn=document.getElementById("enter");

const games=document.getElementById("games");



btn.onclick=()=>{

games.scrollIntoView({

behavior:"smooth"

});

};
