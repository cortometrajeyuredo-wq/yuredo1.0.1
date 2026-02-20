// Lógica del slider
let currentSlide = 0; // Empieza desde la primera imagen

// Función para cambiar la imagen del slider
function changeSlide(direction) {
    const images = document.querySelectorAll('.slider .slider-image');
    currentSlide += direction;

    if (currentSlide >= images.length) {
        currentSlide = 0; // Volver al inicio si se pasa del final
    } else if (currentSlide < 0) {
        currentSlide = images.length - 1; // Volver al final si se retrocede
    }

    showSlide(currentSlide);
}

// Función para mostrar la imagen correcta
function showSlide(slideIndex) {
    const images = document.querySelectorAll('.slider .slider-image');
    images.forEach((image, index) => {
        image.style.display = 'none'; // Ocultar todas las imágenes
        if (index === slideIndex) {
            image.style.display = 'block'; // Mostrar la imagen activa
        }
    });
}



// Función para abrir el modal
function openModalSect2() {
    const modal = document.getElementById('modalSect2_1');
    const slider = document.querySelector('#sliderModal'); // Seleccionamos el contenedor del slider
    
    // Establecer overflow: hidden en el contenedor del slider
    slider.style.overflow = 'hidden'; // Esto evitará el desbordamiento de imágenes fuera del área visible

    // Desactivar el scroll en el body cuando el modal está abierto
    document.body.style.overflow = 'hidden'; // Esto evita el scroll en la página

    // Mostrar el modal
    modal.style.display = 'flex'; // Esto hace que el modal se muestre

    // Mostrar la primera imagen del slider
    showSlide(currentSlide);
}

// Función para cerrar el modal
function closeModalSect2() {
    const modal = document.getElementById('modalSect2_1');
    const slider = document.querySelector('#sliderModal'); // Seleccionamos el contenedor del slider
    
    // Remover overflow: hidden (por si lo necesitas para otros modales o sliders)
    slider.style.overflow = ''; // Restauramos el estilo original del contenedor

    // Restaurar el scroll en el body cuando el modal se cierra
    document.body.style.overflow = ''; // Permite nuevamente hacer scroll en la página

    // Ocultar el modal
    modal.style.display = 'none'; // Esto oculta el modal
};


