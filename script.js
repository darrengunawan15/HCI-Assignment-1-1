const burger = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".menu-list");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
})

document.querySelectorAll(".menu-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    burgerMenu.classList.remove("active");
}))