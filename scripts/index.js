const hamburgerButton = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobileNavModal");

hamburgerButton.addEventListener("click", () => {
  mobileNav.classList.toggle("mobileNavActive");
});

mobileNav.addEventListener("click", (event) => {
  mobileNav.classList.remove("mobileNavActive");
});
