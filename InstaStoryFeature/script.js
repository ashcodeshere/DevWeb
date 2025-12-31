var arr=[
    {
        dp:"https://images.unsplash.com/photo-1767072528350-4211df85970a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1767022724852-2297dc06aa53?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1764826270914-f1d46d09cf3b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1766036387999-6b4165982145?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1767022724924-993b00fc04b3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1766547131750-07736b5f2911?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1764177093469-1fb967fb216b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1764177093445-32593e52b43f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1766351826045-d5d08890e1e9?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1766933366411-7a921aebe181?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1766654271534-575410ad1468?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1766155072326-ffcdb3448a05?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
var storiyaan=document.querySelector("#storiyaan");
var clutter="";
arr.forEach(function(elem,idx){
    clutter+=`<div class="story"><img id="${idx}" src="${elem.dp}" alt="Image"></div>`
});
storiyaan.innerHTML=clutter
storiyaan.addEventListener("click",function(data){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[data.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },5000)
})