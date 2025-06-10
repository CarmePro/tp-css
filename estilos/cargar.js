// Este script va dentro de las etiquetas <script> en tu HTML, preferiblemente al final del <body>

document.addEventListener('DOMContentLoaded', (event) => {
    const loadingOverlay = document.getElementById('loading-overlay');

    // 1. Ocultar el overlay cuando la página actual está completamente cargada
    if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.visibility = 'hidden';
    }

    // 2. Mostrar el overlay cuando se hace clic en un enlace para navegar a otra página
    const links = document.querySelectorAll('a'); // Selecciona todos los enlaces
    links.forEach(link => {
        // Asegurarse de que sea un enlace interno y que realmente vaya a otra página
        if (link.href && link.href.startsWith(window.location.origin) && link.href !== window.location.href && !link.classList.contains('no-loader')) {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Previene la navegación inmediata del navegador

                if (loadingOverlay) {
                    loadingOverlay.style.opacity = '1';
                    loadingOverlay.style.visibility = 'visible';
                }

                // Pequeño retraso para que la animación se vea antes de navegar
                setTimeout(() => {
                    window.location.href = link.href; // Redirige a la nueva página
                }, 300); // 300 milisegundos de retraso (ajusta si quieres más o menos)
            });
        }
    });
});