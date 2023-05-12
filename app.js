// Seleccionar todos los enlaces del menú
const navLinks = document.querySelectorAll('nav a');

// Añadir un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Prevenir el comportamiento predeterminado del enlace
    e.preventDefault();

    // Obtener la sección a la que se debe desplazar
    const section = document.querySelector(link.hash);

    // Desplazarse suavemente a la sección
    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
