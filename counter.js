const Counter =document.getElementById("Counter");
const decrement =document.getElementById("decrement");
const increment =document.getElementById("increment");
const reset =document.getElementById("reset");
let count=0;

increment.onclick=function(){
    count++;
    Counter.textContent=count;
}
reset.onclick=function(){
    count=0;
    Counter.textContent=count;
}
decrement.onclick =function(){
    count--;
    Counter.textContent=count;
}

///now it new//