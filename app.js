const personalImg = document.querySelector(".glitch");
const images = ["assets/Untitled-design-3-p-1080.png", "assets/glitch-image-1659311358.png", "assets/glitch-image-1659311369.png","assets/glitch-image-1659311377.png","assets/Untitled-design-3-p-1080.png"];
const timer = ms => new Promise(res => setTimeout(res, ms));
const overlay = document.querySelector(".overlay");
let box = document.querySelectorAll(".box");
box.forEach((popup) => {
    popup.addEventListener("click", () => {
        popup.classList.toggle("active");
    })
})

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

// scroll animations
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal1);
window.addEventListener("scroll", reveal2);
window.addEventListener("scroll", reveal3);
window.addEventListener("scroll", reveal4);
// translate up and down
function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function reveal1() {
    var reveals1 = document.querySelectorAll(".reveal1")
    for (var i = 0; i < reveals1.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals1[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals1[i].classList.add("active1");
        } else {
            reveals1[i].classList.remove("active1");
        }
    }
}

// opacity animation
function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2")
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals2[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals2[i].classList.add("active2");

        } else {
            reveals2[i].classList.remove("active2");
        }
    }
};

// Translate Horizontal animation
function reveal3() {
    var reveals3 = document.querySelectorAll(".reveal3")
    for (var i = 0; i < reveals3.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals3[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTOP < windowHeight - revealPoint) {
            reveals3[i].classList.add("active3");

        } else {
            reveals3[i].classList.remove("active3");
        }
    }
};

// Translate Horizontal animation2
function reveal4() {
    var reveals4 = document.querySelectorAll(".reveal4")
    for (var i = 0; i < reveals4.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals4[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTOP < windowHeight - revealPoint) {
            reveals4[i].classList.add("active4");

        } else {
            reveals4[i].classList.remove("active4");
        }
    }
};





