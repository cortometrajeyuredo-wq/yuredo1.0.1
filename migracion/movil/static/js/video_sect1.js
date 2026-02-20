// Obtener los elementos
const video = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playBtn');

// Reproducir el video al hacer clic en la imagen de reproducción
playBtn.addEventListener('click', function() {
    //console.log("clic en el boton")
    video.play();
    playBtn.style.display = 'none'; // Ocultar la imagen cuando el video se reproduce
});

// Mostrar la imagen de reproducción cuando el video termina
video.addEventListener('ended', function() {
    playBtn.style.display = 'flex'; // Mostrar la imagen cuando el video termina
});

// Mostrar la imagen de reproducción cuando el video se pausa
video.addEventListener('pause', function() {
    if (!video.ended) { // Solo mostrar si no ha terminado
        playBtn.style.display = 'flex';
    }
});

// Ocultar la imagen de reproducción cuando el video se está reproduciendo
video.addEventListener('play', function() {
    playBtn.style.display = 'none';
});
