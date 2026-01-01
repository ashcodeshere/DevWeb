var audio=document.createElement('audio');
audio.src='dhoom_theme.mp3'
audio.loop=true;
document.addEventListener("click",function start(){
    audio.play();
});
document.addEventListener("dblclick",function end(){
    audio.pause();
    audio.currentTime=0;
});