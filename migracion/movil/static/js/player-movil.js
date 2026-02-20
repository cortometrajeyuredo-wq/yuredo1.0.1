const audioModal = document.getElementById("audioModal");
const openAudioModal = document.getElementById("openAudioModal");
const closeAudioModal = document.getElementById("closeAudioModal");


const audioPlayer = document.getElementById("audioPlayer");
const progressBar = document.getElementById("progressBar");
const marker = document.getElementById("marker");
const volumeControl = document.getElementById("volumeControl");
const volumeBar = document.querySelector('.bar');
const barFill = document.querySelector('.bar-fill');

let selectedSong = null;
let isPlaying = false;


 // Abrir modal de audio
 openAudioModal.addEventListener("click", function() {
    audioModal.style.display = "block";
});

// Cerrar modal de audio
closeAudioModal.addEventListener("click", function() {
    audioModal.style.display = "none";
    audioPlayer.pause();
});

// Cambiar la canción seleccionada
function selectSong(song) {
    selectedSong = `/static/audio-player/${song}`;
    audioPlayer.src = selectedSong;
    audioPlayer.load();
    playAudio();  // Reproducir la nueva canción automáticamente
}

// Reproducir o pausar la canción seleccionada
function playAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying = true;
    } else {
        audioPlayer.pause();
        isPlaying = false;
    }
}

// Control de volumen cuando el usuario arrastra la barra
volumeBar.addEventListener('mousedown', function(event) {
    document.addEventListener('mousemove', adjustVolume);
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', adjustVolume);
    });
});

function adjustVolume(event) {
    const barRect = volumeBar.getBoundingClientRect();
    const offsetY = event.clientY - barRect.top;
    const barHeight = volumeBar.offsetHeight;

    // Calcula la nueva altura en porcentaje de la barra
    let newHeight = barHeight - offsetY;
    if (newHeight < 0) newHeight = 0;
    if (newHeight > barHeight) newHeight = barHeight;

    // Actualiza el porcentaje de volumen y el alto de la barra
    const volumePercentage = newHeight / barHeight;
    barFill.style.height = `${volumePercentage * 100}%`;

    // Ajusta el volumen del audio
    audioPlayer.volume = volumePercentage;
}
// Actualizar la posición del marcador y barra de progreso mientras se reproduce el audio
audioPlayer.addEventListener("timeupdate", function() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    marker.style.left = `${progress}%`;
});
// Función para mostrar/ocultar el submenú
function toggleSubmenu() {
    const submenu = document.getElementById('submenu');
    
    // Alternar la clase "visible" en el submenú
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";  // Mostrar submenú
    } else {
        submenu.style.display = "none";   // Ocultar submenú
    }
}


