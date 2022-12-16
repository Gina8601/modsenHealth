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

const alerts = document.querySelector("#alerts");

let alertsEnabled = false; 

alerts.addEventListener("click", function(e){
  alertsEnabled = !alertsEnabled; 
  if (alertsEnabled) {
    alerts.src = '../assets/notification.svg';
    console.log("on");
  }
  else {
    alerts.src = '../assets/notification_off.svg';
    console.log("off");
  }
});