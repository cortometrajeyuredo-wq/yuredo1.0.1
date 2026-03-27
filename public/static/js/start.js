document.addEventListener("DOMContentLoaded", function () {
    function generarEstrellas(selector, totalEstrellas, leftMin = 0, leftMax = 100) {
        const estrellasContainer = document.querySelector(selector);
        
        for (let i = 0; i < totalEstrellas; i++) {
            const estrella = document.createElement('div');
            estrella.classList.add('estrella');
            estrella.style.top = `${Math.random() * 100}%`;
            estrella.style.left = `${leftMin + Math.random() * (leftMax - leftMin)}%`;
            estrellasContainer.appendChild(estrella);
        }
    }

    // Llamadas a la función para diferentes contenedores
    generarEstrellas('.estrellas', 80);           // Genera 80 estrellas en el contenedor con clase 'estrellas'
    generarEstrellas('.estrellas2', 60, 20, 90);  // Genera 60 estrellas en el contenedor con clase 'estrellas2'
    generarEstrellas('.estrellas3', 40, 20, 90);  // Genera 40 estrellas en el contenedor con clase 'estrellas3'
    generarEstrellas('.estrellas4', 40, 20, 90); 
    
   
});
