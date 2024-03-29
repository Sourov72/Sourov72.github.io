window.addEventListener("popstate", detecthistory);

    function mynavbar1(){

        window.history.pushState({id:1}, null, "#home");
    }
    function mynavbar2(){

        window.history.pushState({id:2}, null, "#about");
    }
    function mynavbar3(){

        window.history.pushState({id:3}, null, "#education");
    }
    function mynavbar4(){

        window.history.pushState({id:4}, null, "#skills");
    }
    function mynavbar5(){

        window.history.pushState({id:5}, null, "#projects");
    }
    function mynavbar6(){

        window.history.pushState({id:6}, null, "#hobby");
    }
    function mynavbar7(){

        window.history.pushState({id:7}, null, "#contact");
    }

    function detecthistory(){
        
    }



const menu = document.querySelector(".menu")
const navOpen = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navBar = document.querySelector(".nav");


const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", () => {
    if(navLeft < 0){
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});


navClose.addEventListener("click", () => {
    if(navLeft < 0){
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

// Fix nav

const  navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add("fix-nav");
    }
    else{
        navBar.classList.remove("fix-nav");
    }
});

// Scroll To

const links = [...document.querySelectorAll(".scroll-link")];

links.map(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top: position, 
            left: 0,
        });

        navBar.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");

    });
});

new TypeIt("#type1",  {
    speed: 120,
    loop: true, 
    waitUntilVisible: true,
})
.type("a Graduate Student", {delay: 400})
.pause(500)
.delete(16)
.type("a CSE Student", {delay: 400})
.pause(500)
.delete(9)
.go();


// GSAP
gsap.from(".logo", {opacity: 0, duration: 1, delay: 0.5, y: -10});
gsap.from(".hamburger", {opacity: 0, duration: 1, delay: 1, x: 20});
gsap.from(".banner", {opacity: 0, duration: 1, delay: 1.5, x: -200});
gsap.from(".hero h3", {opacity: 0, duration: 1, delay: 2, y: -50});
gsap.from(".hero h1", {opacity: 0, duration: 1, delay: 2.5, y: -45});
gsap.from(".hero h4", {opacity: 0, duration: 1, delay: 3, y: -30});
gsap.from(".hero a", {opacity: 0, duration: 1, delay: 3.5, y: 50});
gsap.from(".nav-item", {
    opacity: 0,
    duration: 1, 
    delay: 1.2, 
    y: 30, 
    stagger: 0.2,
});

gsap.from(".icons span", {
    opacity: 0,
    duration: 1, 
    delay: 4, 
    x: -30, 
    stagger: 0.2,
});


new TypeIt("#type2",  {
    speed: 120,
    loop: true, 
    waitUntilVisible: true,
})
.type("an Undergraduate", {delay: 400})
.pause(500)
.delete(16)
.type("a CSE Student", {delay: 400})
.pause(500)
.delete(9)
.go();



// Glidejs

const glide =  document.querySelector(".glide");

if(glide)
    new Glide(glide, {
        type: 'carousel',
        startAt: 0,
        perView: 3, 
        gap: 30,
        hoverpause: true,
        autoplay: 2000, 
        animationDuration: 800, 
        animationTimingFunc: "ease-in-out",
        breakpoints: {
            996: {
                perView: 2,
                autoplay: 4000,
                animationDuration: 1300, 

            },
            768: {
                perView: 1,
                autoplay: 4000,
                animationDuration: 1300, 
            },
        },
    }).mount();


    AOS.init();




    