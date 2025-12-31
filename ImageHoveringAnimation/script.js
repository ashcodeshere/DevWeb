var b=document.querySelectorAll(".box")
var elemImage=document.querySelectorAll("#box img")

b.forEach(function(data){
    data.addEventListener("mouseenter",function(){
        data.childNodes[3].style.opacity=1
    })
    data.addEventListener("mouseleave",function(){
        data.childNodes[3].style.opacity=0
    })
     data.addEventListener("mousemove",function(val){
        data.childNodes[3].style.left=val.x+"px";
    })  
})
