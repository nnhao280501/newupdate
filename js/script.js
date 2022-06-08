var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Graphic Designer", "Web Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
let navtoggle = document.querySelector('.aside');
document.querySelector('.nav-toggler ').onclick = () => {
    navtoggle.classList.toggle('active')
}
window.onscroll = () => {
    navtoggle.classList.remove('active');
}