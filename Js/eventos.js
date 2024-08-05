document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad del slider
    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach((container, index) => {
        const slides = container.querySelectorAll('.slide');
        let currentIndex = 0;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            const offset = -currentIndex * 100;
            container.querySelector('.slider').style.transform = `translateX(${offset}%)`;
        }

        setInterval(showNextSlide, 3000);
    });

    // Función para redireccionar en dispositivos móviles
    function redirectOnMobile() {
        // Verifica el tamaño de la pantalla
        var screenWidth = window.innerWidth;

        // Verifica si es un dispositivo móvil y modifica el enlace en consecuencia
        if (screenWidth <= 480) {
            // Dispositivos móviles
            document.getElementById("conoce-link").href = "conoce2.html";
        }
    }

    // Llama a la función para redireccionar en dispositivos móviles
    redirectOnMobile();
});
