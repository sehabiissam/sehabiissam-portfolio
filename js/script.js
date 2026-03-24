const dropDown = document.querySelector(".js-drop-down");
const phoneNavigation = document.querySelector(".phone-navigation");

dropDown.addEventListener("click", (e) => {
  e.stopPropagation();
  phoneNavigation.classList.toggle("phone-navigation-active");
  dropDown.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!phoneNavigation.contains(e.target) && !dropDown.contains(e.target)) {
    phoneNavigation.classList.remove("phone-navigation-active");
    dropDown.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("scrolled", window.scrollY > 10);
});
