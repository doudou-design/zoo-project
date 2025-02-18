document.addEventListener("DOMContentLoaded", function () {
    let menuButton = document.getElementById("menu-toggle");
    let navMenu = document.querySelector("nav ul");

    menuButton.addEventListener("click", function () {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        }
    });
});
