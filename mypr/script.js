let counter=0;
const counterval=document.getElementById("currval");
const decreasebutton=document.getElementById("decr");
const resetbin=document.getElementById("res");
const increasebutton=document.getElementById("incr");
const stepInput = document.getElementById("stepInput");
function updatefunc(){
    counterval.textContent=counter;
    if (counter>0){
        counterval.style.color="green";
    }
    else if(counter<0){
        counterval.style.color="red";
    }
    else{
        counterval.style.color="yellow";
    }
}
resetbin.addEventListener("click",function(){
    counter=0;
    updatefunc();
})


increasebutton.addEventListener("click", function () {
    counter += Number(stepInput.value);
    updatefunc();
})

decreasebutton.addEventListener("click", function () {
    counter -= Number(stepInput.value);
    updatefunc();
})