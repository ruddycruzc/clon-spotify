const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("nav__menu--active");

  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !expanded);
});