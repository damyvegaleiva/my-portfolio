const navbarMenu = document.querySelector(".nav-menu");
const navbarLink = document.querySelectorAll(".nav-link");
const hamburguerBtn = document.getElementById("hamburguer-btn");
const navBar = document.querySelector(".nav-bar");
const angleRight = document.getElementById("angle-right");
const angleLeft = document.getElementById("angle-left");
const certificateWD = document.querySelector(".certificate-wd");
const certificateJS = document.querySelector(".certificate-js");

angleRight.onclick = certificate;
angleLeft.onclick = certificate;

function certificate() {
    certificateJS.classList.toggle("active");
    certificateWD.classList.toggle("active");
    document.querySelector(".fa-angle-left").classList.toggle("hidden");
    document.querySelector(".fa-angle-right").classList.toggle("hidden");
}

hamburguerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    navBar.classList.toggle("active");

    if (hamburguerBtn.classList.contains("active")) {
        hamburguerBtn.classList.remove("active");
    } else {
        hamburguerBtn.classList.add("active");
    }
});

navbarLink.forEach(element => element.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    hamburguerBtn.classList.remove("active");
    navBar.classList.toggle("active");
}));