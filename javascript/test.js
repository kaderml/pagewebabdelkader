// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    let headerTitle = document.querySelector('h1');

    function animateTitle() {
        headerTitle.style.transform = 'translateX(0)'; // Amène le titre au centre
    }

    // Initialement, placez le titre hors de l'écran à droite
    headerTitle.style.transform = 'translateX(500vw)';

    // Démarre l'animation après un court délai pour garantir que le style initial est appliqué
    setTimeout(animateTitle, 200);
});