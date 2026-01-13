var cr=document.querySelector("#circle")
var main=document.querySelector("#main")
main.addEventListener("mousemove",function(data){
    cr.style.left=data.x+"px";
    cr.style.top=data.y+"px";
})