const navbarMenu = document.querySelector(".nav-menu");
const navbarLink = document.querySelectorAll(".nav-link");
const hamburguerBtn = document.getElementById("hamburguer-btn");

hamburguerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    if (hamburguerBtn.classList.contains("active")) {
        hamburguerBtn.classList.remove("active")
    } else {
        hamburguerBtn.classList.add("active")
    }
})

navbarLink.forEach(element => element.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
}))