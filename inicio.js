// Función para redireccionar en dispositivos móviles
function redirectOnMobile(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();

    // Verifica el tamaño de la pantalla
    var screenWidth = window.innerWidth;

    // Verifica si es un dispositivo móvil y redirecciona en consecuencia
    if (screenWidth <= 480) {
        // Dispositivos móviles
        window.location.href = "test.html";
    } else {
        // Otros dispositivos
        window.location.href = "eventos.html";
    }
}

// Obtener la imagen por su ID
var img = document.getElementById("imagen-blog");

// Agregar un manejador de eventos clic a la imagen
img.addEventListener("click", redirectOnMobile);

// Función para redireccionar el enlace "Conoce tu Carrera" en dispositivos móviles
function redirectConoceOnMobile() {
    // Verifica el tamaño de la pantalla
    var screenWidth = window.innerWidth;

    // Verifica si es un dispositivo móvil y modifica el enlace en consecuencia
    if (screenWidth <= 480) {
        // Dispositivos móviles
        document.getElementById("conoce-link").href = "conoce2.html";
    }
}

// Llama a la función cuando la página esté completamente cargada
window.onload = function() {
    // Llama a la función para redireccionar en dispositivos móviles
    redirectConoceOnMobile();
};


