const navbarMenu = document.querySelector(".nav-menu");
const navbarLink = document.querySelectorAll(".nav-link");
const hamburguerBtn = document.getElementById("hamburguer-btn");
const navbar = document.querySelector(".nav-bar");
const angleRight = document.getElementById("angle-right");
const certificateWD = document.querySelector(".certificate-wd");
const certificateJS = document.querySelector(".certificate-js");


angleRight.addEventListener("click", () => {


    certificateJS.classList.toggle("active");
    certificateWD.classList.toggle("active");


})


hamburguerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    navbar.classList.toggle("active");

    if (hamburguerBtn.classList.contains("active")) {
        hamburguerBtn.classList.remove("active")
    } else {
        hamburguerBtn.classList.add("active")
    }
})

navbarLink.forEach(element => element.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    hamburguerBtn.classList.remove("active")
    navbar.classList.toggle("active");
}))