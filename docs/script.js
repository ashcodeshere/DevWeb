var listContainer=document.getElementById('list-container');
var inputBox=document.getElementById('input-box');

function addTask(){
    if(inputBox.value.trim()===''){
        alert("You haven't wrote anything");
        return;
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

inputBox.addEventListener("keypress",function(e){
    if(e.key==="Enter") addTask();
},false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();