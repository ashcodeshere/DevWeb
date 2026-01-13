const hour=document.querySelector("#hour");
const min=document.querySelector("#min");;
const sec=document.querySelector("#sec");;
setInterval(function(){
    d=new Date();
    hrotation=30*(d.getHours()%12)+d.getMinutes()/2;
    mrotation=6*d.getMinutes()+d.getSeconds()/10;
    srotation=6*d.getSeconds()+d.getMilliseconds()*0.006;
    hour.style.transform=`rotate(${hrotation}deg)`
    min.style.transform=`rotate(${mrotation}deg)`
    sec.style.transform=`rotate(${srotation}deg)`
},50)

var start=document.querySelector("#start");
var stop=document.querySelector("#stop");
var reset=document.querySelector("#reset");

var hourbox=document.querySelector("#hourbox");
var minbox=document.querySelector("#minbox");
var secbox=document.querySelector("#secbox");

let h=0,m=0,s=0,timer=null;

function UpdateStopWatch(){
    s++;
    if(s===60){
        s=0;
        m++;
    }if(m===60){
        m=0;
        h++;
    }
    hourbox.textContent=h<10?"0"+h:h;
    minbox.textContent=m<10?"0"+m:m;
    secbox.textContent=s<10?"0"+s:s;
}

start.addEventListener("click",function(){
    if(timer!=null) return;
    timer=setInterval(UpdateStopWatch,1000);
});
stop.addEventListener("click",function(){
    clearInterval(timer);
    timer=null;
});
reset.addEventListener("click",function(){
    clearInterval(timer);
    timer=null;
    h=m=s=0;
    hourbox.textContent="00";
    minbox.textContent="00";
    secbox.textContent="00";
});