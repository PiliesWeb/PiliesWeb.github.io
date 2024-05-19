
  // Función para alternar la visibilidad de una respuesta
  function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const button = event.currentTarget;

    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('svg').classList.add('rotate-180');
    } else {
      answer.style.display = 'none';
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('svg').classList.remove('rotate-180');
    }
  }

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

  // Llama a la función de redireccionamiento cuando la página esté completamente cargada
  window.onload = function() {
    redirectOnMobile();
  }
