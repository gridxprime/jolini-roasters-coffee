const add = x => {
    let res = 0
    for(let i = 0; i <= x; i++){
        res+=i
    } return res

}


function changeVideoSource() {
    let video = document.querySelector(".start__bgvideo");
    if (window.matchMedia("(max-width: 600px)").matches) {

      video.src = "vid/low__1.mp4";
    } else {
        video.src = "vid/1.mp4";
    }
  }