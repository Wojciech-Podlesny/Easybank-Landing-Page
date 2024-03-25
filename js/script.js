const menuBtn = document.querySelector(".menu-button")
const closeBtn = document.querySelector('.close-button')
const header = document.querySelector(".header")
const links = document.querySelectorAll(".nav-group a")


const toggleMenu =() => {
    menuBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    header.classList.toggle("active");

    links.forEach(link => {
        link.addEventListener('click',() => {
            header.classList.toggle("active");
        })
    })
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
