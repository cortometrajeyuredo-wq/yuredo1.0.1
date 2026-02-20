
        // Obtiene el modal de audio
        var audioModal = document.getElementById("audioModal");

        // Obtiene el botón que abre el modal
        var btnAbrirModal = document.getElementById("openAudioModal");

        // Obtiene el botón que cierra el modal
        var btnCerrarModal = document.getElementById("closeAudioModal");

        // Cuando el usuario haga clic en el botón, abre el modal de audio
        btnAbrirModal.onclick = function() {
            audioModal.style.display = "block";
        }

        // Cuando el usuario haga clic en el botón de cerrar, cierra el modal de audio
        btnCerrarModal.onclick = function() {
            audioModal.style.display = "none";
        }

        // Función para reproducir el audio
        function reproducirAudio() {
            var audio = document.getElementById("audioElement");
            audio.play();
        }

        // Función para seleccionar la canción
        function seleccionarCancion(cancion) {
            var audio = document.getElementById("audioElement");
            audio.src = './audio-player/' + cancion;
            audio.play();
        }

        const closeAudioModal = document.getElementById("closeAudioModal");

        // Añade un evento al cerrar el modal
        closeAudioModal.addEventListener("click", function() {
            audioPlayer.pause(); // Detiene la reproducción
            audioPlayer.currentTime = 0; // Opcional: reinicia la canción al inicio
            document.getElementById("audioModal").style.display = "none"; // Oculta el modal
        });
        