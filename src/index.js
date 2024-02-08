// Evento para el navbar

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navIcon = document.getElementById('nav-icon');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('top-[100px]');

  navIcon.classList.contains("uil-align-justify") ? navIcon.classList.replace("uil-align-justify", "uil-compress") : navIcon.classList.replace("uil-compress", "uil-align-justify");

  console.log("Pulsando el boton")
});



// Modo noche

const noche = document.getElementById('noche');
const botonNoche = document.getElementById('botonNoche');
let isNoche = false;

botonNoche.addEventListener('click', (e) => {
        noche.classList.toggle('dark')
        isNoche = !isNoche;

        if (isNoche) botonNoche.innerHTML = `<i class="uil uil-brightness text-2xl hover:text-[F65938] transition"></i>`
        else botonNoche.innerHTML = `<i class="uil uil-moon text-2xl hover:text-[F65938] transition"></i>`
})