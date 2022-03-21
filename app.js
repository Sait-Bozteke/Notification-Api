window.addEventListener("load",()=>{
    console.log(window.Notification);
    if(!window.Notification) return;
    
   
})

const sendNotification=(permition)=>{
let notification=new Notification("yeni bildirim",{
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, tenetur pariatur! Temporibus dolores nemo excepturi aspernatur sapiente? Beatae, vero optio voluptatem pariatur eligendi harum. Laborum."
})
notification.onclick=()=>{
    window.location.href="https://www.clarusway.com"
}
}
const button=document.getElementById("button")
button.addEventListener("click",()=>{
    Notification
    .requestPermission()
    .then(sendNotification)
})