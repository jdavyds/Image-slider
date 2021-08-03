const slides = document.querySelectorAll(".slide")
const leftBtn = document.querySelector("#left")
const rightBtn = document.querySelector("#right")

let navs = document.querySelectorAll(".circle")
let interval = setInterval(run, 5000)
let index = 0
let current;
let past;
let currentNav;
let pastNav;

function run() {
    current = slides[index += 1]
    current.classList.add('active')    
    currentNav = navs[index]
    currentNav.classList.add('nav')
    postRun()
    if (index >= slides.length - 1) {
        index = -1
    }
}
function postRun() {
    past = slides[index - 1]
    past.classList.remove('active')
    pastNav = navs[index - 1]
    pastNav.classList.remove('nav')
    if (index >= slides.length - 1) {
        past = slides[slides.length - 1]
        past.classList.remove('active')
        pastNav = navs[navs.length - 1]
        pastNav.classList.remove('nav')
    }
}
rightBtn.addEventListener('click', () => {
    current = slides[index += 1]
    current.classList.add('active')
    past = slides[index - 1]
    past.classList.remove('active')
    currentNav = navs[index]
    currentNav.classList.add('nav')
    pastNav = navs[index - 1]
    pastNav.classList.remove('nav')
})
leftBtn.addEventListener("click", () => {
    current = slides[index -= 1]
    current.classList.add('active')
    past = slides[index + 1]
    past.classList.remove('active')
    currentNav = navs[index]
    currentNav.classList.add('nav')
    pastNav = navs[index + 1]
    pastNav.classList.remove('nav')
})
