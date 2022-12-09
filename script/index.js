document.body.style.setProperty("--width", window.innerWidth);
window.onresize = () =>
  document.body.style.setProperty("--width", window.innerWidth);

const mobileMenuIc = document.querySelector(".mobile-menu-ic");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuIc.onclick = () => {
  mobileMenu.classList.toggle("active");
  mobileMenuIc.classList.toggle("active");
  document.body.classList.toggle("mobile-active")
}
