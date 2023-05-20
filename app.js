let menu = document.querySelector('.burger');
let navbar = document.querySelector('.navlist');

menu.addEventListener('click', () => {
    menu.classList.toggle('click');
    navbar.classList.toggle('open');
});





var typed = new Typed(".multi", {
    strings: ["Freelancer", "Frontend Developer", "YouTuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    bckDelay: 1000,
    loop: true
});