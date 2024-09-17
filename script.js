
function myVideo() {
    document.getElementById("button_1").click;

    const video=document.querySelector("video");
    navigator.mediaDevices.getUserMedia({
        video:true
    }).then(stream=>{
        video.srcObject=stream;
        video.play();
    })
        
}
    
function myV() {
    document.getElementById("button_2").click;
 const video=document.querySelector("video");
    navigator.mediaDevices.getUserMedia({
        video:false
    }).then(stream=>{
        video.srcObject=stream;
        video.close();
    })
        
}
 