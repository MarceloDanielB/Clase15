// Obtener elementos del DOM
const container = document.querySelector('.container');
const galleryImages = document.querySelectorAll('.galeria__img');
const alertButton = document.querySelector('button[aria-label="Dispara una alerta de saludo"]');
const form = document.getElementById('myForm');

// Agregar estilos dinámicos al contenido
container.style.backgroundColor = 'lightgray';
container.style.padding = '40px';

// Agregar estilos a las imágenes de la galería
galleryImages.forEach((image) => {
    image.style.borderRadius = '5px';
    image.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
});

// Función para cambiar el color de fondo del footer al hacer clic en el botón
function changeFooterBackground() {
    const footer = document.querySelector('.footer');
    footer.style.backgroundColor = 'darkred';
}

// Función de alerta
function showAlert() {
    alert('¡Bienvenido a la DeepWeb!');
    changeFooterBackground();
}


// Agregar evento de envío de formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado');
});

// Agregar evento de clic al botón de menú
document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});