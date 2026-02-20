// Obtener los elementos del video y el botón de reproducción en la sección 3
const video3 = document.getElementById('videoPlayer3');
const playBtn3 = document.getElementById('playBtn3');

// Reproducir el video al hacer clic en la imagen de reproducción
playBtn3.addEventListener('click', function() {
    video3.play();
    playBtn3.style.display = 'none'; // Ocultar el botón cuando el video se reproduce
});

// Mostrar el botón de reproducción cuando el video termina
video3.addEventListener('ended', function() {
    playBtn3.style.display = 'flex'; // Mostrar el botón cuando el video termina
});

// Mostrar el botón de reproducción cuando el video se pausa y no ha terminado
video3.addEventListener('pause', function() {
    if (!video3.ended) { // Solo mostrar si no ha terminado
        playBtn3.style.display = 'flex';
    }
});

// Ocultar el botón de reproducción cuando el video se está reproduciendo
video3.addEventListener('play', function() {
    playBtn3.style.display = 'none';
});
