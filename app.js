const personalImg = document.querySelector(".glitch");
const images = ["assets/Untitled-design-3-p-1080.png", "assets/glitch-image-1659311358.png", "assets/glitch-image-1659311369.png","assets/glitch-image-1659311377.png","assets/Untitled-design-3-p-1080.png"];
const timer = ms => new Promise(res => setTimeout(res, ms));
const overlay = document.querySelector(".overlay");
let box = document.querySelectorAll(".box");
const overlay2 = document.querySelector(".project-overlay");
const projects = document.querySelectorAll(".Project");
const closeBtn = document.querySelector(".close");
const ProjectInfo = document.querySelector(".Project-info");
const projName = document.querySelector(".Proj-Name");
const ProjAbout = document.querySelector(".Proj-About");
const projStruggle = document.querySelector(".Proj-Struggle");
const list1 = document.querySelector(".Li1");
const list2 = document.querySelector(".Li2");
const list3 = document.querySelector(".Li3");
const list4 = document.querySelector(".Li4");
const list5 = document.querySelector(".Li5");
const list6 = document.querySelector(".Li6");
const ProjImage = document.querySelector(".Proj-images");
const nav = document.querySelectorAll(".nav-circle");
const livePreview = document.querySelector(".live-Preview")
const sourceCode = document.querySelector(".Source-Code");
const ProjInfoText = [{
    h1: "RPJ Property",
    about: "A Multifunctional Property Development website, Utilizing HTML/CSS and Javascript to create a dynamic site with a Background Video for a Hero section, a Property Page, blog page, and more, While maintaining a simple, yet clean structure and design",
    struggles: "As the Project had multiple pieces of content i struggled to display them all in a nice clean way without cluttering the page to much. I overcame these issues by storing all the content in objects which would be called using an eventlistener and targeting the div's Id for specificity and then rendering the content", 
    li1: "Responsive Design",
    li2: "FLEXBOX/CSS GRID DESGIN",
    li3: "DOM Manipulation",
    li4: "Background Video",
    li5: "Slideshow / Carousel",
    li6: "CSS & JAVASCRIPT Animations",
    src: ["assets/Screenshot (20).png","assets/Screenshot (25).png","assets/Screenshot (28).png"],
    LP: "https://skarzcode.github.io/RPJ-Test/",
    SC: "https://github.com/skarzcode/RPJ-Test",

},{
    h1: "Personal Project",
    about: "A beautiful and simple single page site with a modern and elegant design enabling me with a convenient way to publish and showcase a self managed portfolio of Projects, design ideas and creative thinking made with HTML/CSS and JavaScript",
    struggles: "The Overlay animation at the start contains texts which rotate into display. Initially i was unable to make it work as it rotated the whole text and not from a pivot. I overcame this issue by reading up documentation and going on stackoverflow to learn about a css property called transform-origin which enabsled my animtion to work", 
    li1: "Overlay Animation",
    li2: "Clip Path Videos",
    li3: "DOM Manipulation",
    li4: "Animated Texts",
    li5: "Interactivity",
    li6: "CSS & JAVASCRIPT Animations",  
    src: ["assets/Screenshot (8).png", "assets/Screenshot (23).png", "assets/Screenshot (24).png" ],
    LP: "https://skarzcode.github.io/portfolio2/",
    SC: "https://github.com/skarzcode/portfolio2"
},
{
    h1: "Photographhy Portfolio",
    about: "Jessica's Photography portfolio is a unique, fully responsive Website that's perfect for a photographer Utilizing HTML/CSS and Javascript. This Website comes with a stunning hero section as well as a masonry grid and service section. Besides the simple, yet classy design, this site comes with a bunch of custom animations and interactions that makes browsing the website pleasant and engaging.",
    struggles: "This Project has a unique navigation which i planned to make and implement using css. However, due to the animations complexitiy i had to utilise Javascript to add and remove classes with the desired effec that I wanted", 
    li1: "Responsive Navigation",
    li2: "Flexbox/Grid Design",
    li3: "Forms",
    li4: "Dynamic Reviews",
    li5: "Interactivity",
    li6: "CSS & JAVASCRIPT Animations",  
    src: ["assets/Screenshot (13).png", "assets/Screenshot (30).png", "assets/Screenshot (29).png"],
    LP: "https://skarzcode.github.io/Dynamic-Nav-Template/",
    SC: "https://github.com/skarzcode/Dynamic-Nav-Template"
},{

    h1: "Quote Generator",
    about: "Utilizing HTML/CSS and JavaScript as well as a Quote Generating API i created a Responsive Quote Generator with a tweet Functionality all while maintaining a simple and elegant design",
    struggles: "Due to the quotes being generated were random, at times the text would overflow the div. To overcome this i had to check the number of word and if it exceeded an set amount i would change the font of the text to accomoate fort he div", 
    li1: "Quote Generating API",
    li2: "Social Sharing Function",
    li3: "SVG Background",
    li4: "Responsive Design",
    li5: "Interactivity",
    li6: "CSS & JAVASCRIPT Animations",  
    src: ["assets/Screenshot (19).png", "assets/Screenshot (31).png", "assets/Screenshot (32).png"],
    LP: "https://skarzcode.github.io/Quote-Generator/",
    SC: "https://github.com/skarzcode/Quote-Generator"
},
{

    h1: "Calculator",
    about: " An on-screen calculator using JavaScript, HTML, and CSS. With Built in functions to evaluate expressions while maintaining a simple clean design",
    struggles: "A basic Calculator lets you chain on multiple different operations to the returned value. I struggled on this because when i would try it. NAN would be returned in my calc screen. This occured because my operator function would run even if the currVal or previousVal was empty so I made a boolean to check if both values are populated and to then run an operator function on them", 
    li1: "DOM Manipulation",
    li2: "Interactions",
    li3: "Responsive Design",
    li4: "Flexbox Design",
    li5: "Minimal Desgin",
    li6: "CSS Animations",  
    src: ["assets/Screenshot (15).png", "assets/Screenshot (33).png","assets/Screenshot (15).png"],
    LP: "https://skarzcode.github.io/TOP-Calculator/",
    SC: "https://github.com/skarzcode/TOP-Calculator"
},
{
    h1: "Tic Tac Toe",
    about: " Utilising Object Oriented Programming I created a game of Tic Tac Toe that can be played in the browser against another Player or even against and AI", 
    struggles: "Whenever the AI was one move away from winning. The AI didnt populated the board with the final O to get three in a row and would just got to the celebration screen making it seem as if it didnt place the move. I overcame this issue by setting a SetTimeOut after the move had been printed to the Dom and then ran the function to check if anyone had won.", 
    li1: "AI Mode",
    li2: "PVP Mode",
    li3: "Factory Function/OOP",
    li4: "DOM Manipulation",
    li5: "Celebration Giphy",
    li6: "Interactivity",  
    src: ["assets/Screenshot (21).png", "assets/Screenshot (34).png", "assets/Screenshot (35).png"],
    LP: "https://skarzcode.github.io/TOP-Tic-Tac-Toe/",
    SC: "https://github.com/skarzcode/TOP-Tic-Tac-Toe"
},

];

function renderElement (i){
    projName.innerHTML = ProjInfoText[i].h1;
    ProjAbout.innerHTML = ProjInfoText[i].about;
    projStruggle.innerHTML = ProjInfoText[i].struggles;
    list1.innerHTML = ProjInfoText[i].li1;
    list2.innerHTML = ProjInfoText[i].li2;
    list3.innerHTML = ProjInfoText[i].li3;
    list4.innerHTML = ProjInfoText[i].li4;
    list5.innerHTML = ProjInfoText[i].li5;
    list6.innerHTML = ProjInfoText[i].li6;
    ProjImage.src = ProjInfoText[i].src[0];
    nav.forEach((navBtn) => {
        navBtn.addEventListener("click", function(){
            if(navBtn.id == 0){
                ProjImage.src = ProjInfoText[i].src[0];   
                nav[0].classList.remove("nav-color-red");
                nav[1].classList.remove("nav-color-red");
                nav[2].classList.remove("nav-color-red");
                navBtn.classList.add("nav-color-red");
            } else if(navBtn.id == 1){
                ProjImage.src = ProjInfoText[i].src[1];   
                nav[0].classList.remove("nav-color-red");
                nav[1].classList.remove("nav-color-red");
                nav[2].classList.remove("nav-color-red");
                navBtn.classList.add("nav-color-red");
            } else if(navBtn.id == 2){
                ProjImage.src = ProjInfoText[i].src[2]; 
                nav[0].classList.remove("nav-color-red");
                nav[1].classList.remove("nav-color-red");
                nav[2].classList.remove("nav-color-red");
                navBtn.classList.add("nav-color-red");
            }
        })
    });
    livePreview.href = ProjInfoText[i].LP;
    sourceCode.href = ProjInfoText[i].SC;
    return;
}

projects.forEach((proj) => {
    proj.addEventListener("click", function(){
        if(overlay2){
      overlay2.classList.add("overlaySlideIn");
      ProjectInfo.classList.add("projOpacity");
      if(proj.id == 0){
        renderElement(0);
      } else if (proj.id == 1){
        renderElement(1);
      } else if (proj.id == 2){
        renderElement(2);
      } else if (proj.id == 3){
        renderElement(3);
      } else if (proj.id == 4){
        renderElement(4);
      } else if (proj.id == 5){
        renderElement(5);
      };
    }
    })
})

closeBtn.addEventListener("click", function(){
    overlay2.classList.remove("overlaySlideIn");
    ProjectInfo.classList.remove("projOpacity"); 
    nav[0].classList.add("nav-color-red");
    nav[1].classList.remove("nav-color-red");
    nav[2].classList.remove("nav-color-red");
    // setTimeout(() => {
    //  ProjImage.src = " ";
        
    // }, 2000);
});

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
}, 6500);

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





