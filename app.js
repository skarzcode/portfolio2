const personalImg = document.querySelector(".glitch");
const images = ["assets/Untitled-design-3-p-1080.png", "assets/glitch-image-1659311358.png", "assets/glitch-image-1659311369.png","assets/glitch-image-1659311377.png","assets/Untitled-design-3-p-1080.png"];
const timer = ms => new Promise(res => setTimeout(res, ms));
const overlay = document.querySelector(".overlay");

function hideOverlay(){
    overlay.classList.add("displayNone");
};

async function glitch (){
   for(let i=0; i<images.length;i++){
    personalImg.src = images[i];
    await timer(100);
   };
   return
}

// glitch();

setInterval(() => {
    glitch();
}, 2000);

setTimeout(() => {
    hideOverlay()
}, 5500);
