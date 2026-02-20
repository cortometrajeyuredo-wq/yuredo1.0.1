// Obtener los elementos del video y el botón de play
const video2 = document.getElementById('videoPlayer2');
const playBtn2 = document.getElementById('playBtn2');

// Reproducir el video al hacer clic en la imagen de reproducción
playBtn2.addEventListener('click', function() {
    video2.play();
    playBtn2.style.display = 'none'; // Ocultar el botón cuando el video se reproduce
});

// Mostrar el botón de reproducción cuando el video termina
video2.addEventListener('ended', function() {
    playBtn2.style.display = 'flex'; // Mostrar el botón cuando el video termina
});

// Mostrar el botón de reproducción cuando el video se pausa (pero no ha terminado)
video2.addEventListener('pause', function() {
    if (!video2.ended) { // Solo mostrar si el video no ha terminado
        playBtn2.style.display = 'flex';
    }
});

// Ocultar el botón de reproducción cuando el video se está reproduciendo
video2.addEventListener('play', function() {
    playBtn2.style.display = 'none';
});
