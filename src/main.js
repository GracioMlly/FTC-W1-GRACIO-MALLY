import "./css/reset.css";
import "./css/style.css";

const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const mobileNav = document.querySelector(".navbar__menu-mobile");

openMenuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("openingMenu");
});

closeMenuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("openingMenu");
});
