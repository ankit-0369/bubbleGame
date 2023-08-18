
//making bubbles--
function MakeBubble(){
    var bob="";
for(let i=1; i<=1000; i++){
    let val= Math.floor( Math.random()*10);
     bob+= ` <div class="bubble">${val}</div>`;

}

document.querySelector("#pbtm").innerHTML= bob;

}

MakeBubble();

//increase score---
    var score= 0;
function IncScore(){
    score+= 10;
    document.querySelector("#ScoreVal").textContent= score;

}

// IncScore();

//Timer Code---

var timer= 60;
function RunTimer(){
   var timeId= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#left-time").textContent= timer;
        }
        else{
            
            clearInterval(timeId);
            gameOver();
        }
    }, 1000);
}

// RunTimer();

//HIT random values----
var hitValue= Math.floor(Math.random()*10);
document.querySelector("#hitVal").textContent= hitValue;
function GiveHit(){
    hitValue= Math.floor(Math.random()*10);
    console.log(hitValue);
    document.querySelector("#hitVal").textContent= hitValue;

}

// GiveHit();


//event bubbling----

document.querySelector("#pbtm")
.addEventListener("click", function(dets){

    let num= dets.target.textContent;
    
    if(hitValue== Number(num)){
        IncScore();
        GiveHit();
    }
        MakeBubble();
    

});

function gameOver(){
    document.querySelector("#pbtm").innerHTML=`
    <div>Game Over</div>`;
}







