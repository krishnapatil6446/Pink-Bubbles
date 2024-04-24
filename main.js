var timer = 60;
var score = 0;
var hitnum = 0;
function makeBubble(){
    var clutter ="";
for(var i=1; i<=112; i++){
    var rn = Math.floor(Math.random()*10);
   clutter+= `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbottom").innerHTML=clutter;
}
function getnewhit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#getnewhint").textContent=hitnum;
}
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function runtimer(){
    var timerint = setInterval(function (){
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
    }else{
        document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1>`;
        clearInterval(timerint)
    }

    },1000)
}
document.querySelector("#pbottom").addEventListener("click",function(dets){
    var getnum = Number(dets.target.textContent);
    if(getnum === hitnum){
        increaseScore();
        makeBubble();
        getnewhit();
    }
});

runtimer();
makeBubble();
getnewhit();