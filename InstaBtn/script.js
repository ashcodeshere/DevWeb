var cnt=document.querySelector("#container");
var icon=document.querySelector("i");
var heart=document.querySelector("#heart");
flag=0;
cnt.addEventListener("dblclick",function(){
    heart.style.color="red";
    flag=1;
    icon.style.transform="translate(-50%,-50%) scale(1)";
    icon.style.opacity=0.8;
    setTimeout(function(){
        icon.style.opacity=0;
    },1000)
    setTimeout(function(){
        icon.style.transform="translate(-50%,-50%) scale(0)";
    },1150)
})
heart.addEventListener("click",function(){
    if(flag==0){
        heart.style.color="red";
        flag=1;
    }else{
        heart.style.color="black";
        flag=0;
    }
})
