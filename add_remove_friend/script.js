var add_btn=document.querySelector("#add");
var rem_btn=document.querySelector("#remove");
var h=document.querySelector("h5");
add_btn.addEventListener("click",function(){
    h.innerHTML="Friend";
    add_btn.style.backgroundColor="white";
    add_btn.style.pointerEvents="none";
    add_btn.style.border="none";
    rem_btn.style.border="3px solid black";
    rem_btn.style.cursor="pointer";
    rem_btn.style.backgroundColor="darkblue";
    rem_btn.style.pointerEvents="auto";
});

rem_btn.addEventListener("click",function(){
    h.innerHTML="Stranger";
    rem_btn.style.backgroundColor="white";
    rem_btn.style.pointerEvents="none";
    rem_btn.style.border="none";
    add_btn.style.border="3px solid black";
    add_btn.style.cursor="pointer";
    add_btn.style.backgroundColor="darkblue";
    add_btn.style.pointerEvents="auto";
});
