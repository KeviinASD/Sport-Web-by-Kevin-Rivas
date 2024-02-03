// Evento para el navbar

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navIcon = document.getElementById('nav-icon');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('top-[100px]');

  navIcon.classList.contains("uil-align-justify") ? navIcon.classList.replace("uil-align-justify", "uil-compress") : navIcon.classList.replace("uil-compress", "uil-align-justify");

  console.log("Pulsando el boton")
});