let menuBtn = document.querySelector(".menu-toggle-btn")
let navContainer = document.querySelector(".nav-container")
let heroTxt = document.querySelector("#hero span")
let logoTxt = document.querySelector("#logo-txt")
let isAnimating = false
let navLink = document.querySelectorAll(".nav-link a")
let skillsSection = document.querySelector("#skills")
let navbar = document.querySelector("nav")
let text = SplitType.create('#hero-txt')
let contact = document.querySelector("#contact")


// function for Manupulating classes
function manupulatingClasses(element,event , className){
    switch (event) {
        case 'add':
            element.classList.add(className);
            break;
        case 'remove':
            element.classList.remove(className);
            break;
        case 'toggle':
            element.classList.toggle(className);
            break;
        default:
            console.error('Invalid event:', event);
    }
}

// I wrote these lines because when i was click on the link after oppening the navbar, it was not dissapearing so that is why i added these lines 
navLink.forEach(link => { 
    link.addEventListener("click",function(){
        manupulatingClasses(navContainer,"remove", "visible")
        manupulatingClasses(menuBtn,"remove", "active")

    })
});


menuBtn.addEventListener("click", showingMenu)


function showingMenu() {
    manupulatingClasses(navContainer,"toggle","visible")
    manupulatingClasses(menuBtn, "toggle", "active")

    if (!isAnimating) {
        // Play animation forward
        gsap.from(".nav-link", {
            y: 10,
            duration: 0.5,
        });
        isAnimating = true;
    } else {
        // Reverse animation
        gsap.to(".nav-link", {
            y: 0,
            duration: 0.2,
        });
        isAnimating = false;
    }
   
}


document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
         if(window.scrollY >= skillsSection.offsetTop - 30) {
            manupulatingClasses(navbar, "add", "navbar-white")
            manupulatingClasses(logoTxt, "add", "navbar-white")
        } 
         else {
            manupulatingClasses(navbar, "remove" , "navbar-white")
            manupulatingClasses(logoTxt, "remove" , "navbar-white")
        }
    });
});

document.addEventListener("scroll",() => {
    manupulatingClasses(navContainer, "remove" ,"visible")
    manupulatingClasses(menuBtn, "remove" ,"active")
})


contact.addEventListener("scroll", function(){
    
})

// gsap starting here





gsap.to(".text", {
    opacity: 1,
    duration: 1

})

gsap.from(".reload-animation", {
    x: -10,
    opacity: 0
})

let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".skill-item-txt",
      start:"top bottom",
      end:`bottom top`,
        scrub:true,
        ease: "power1.inOut", 
        markers:true
      },
    },
  );

tl.to(".skill-item-txt",{
    x:0,
    duration:2,
})

tl.from(".card",{
    opacity:0,
    scale:0.8,
    duration:1,
    stagger:0.5
})



const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
