var btn=document.querySelector("#btn");
var h=document.querySelector("h5");
var flag=0
btn.addEventListener("click",function(){
    if(flag==0){
        h.innerHTML="Friend";
        btn.innerHTML="Remove Friend"
        flag=1
    }else{
        flag=0;
        h.innerHTML="Stranger";
        btn.innerHTML="Add Friend"
    }
});
