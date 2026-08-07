const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const homeRashguard = document.querySelector(".rashguard-container");

if (homeRashguard) {
    homeRashguard.addEventListener("click", function () {
        homeRashguard.classList.toggle("show-back");
    });
}