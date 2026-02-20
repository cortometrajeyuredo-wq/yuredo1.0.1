let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;


        // Quita la clase active del slide actual
        slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    slides.forEach((slide, index) => {
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        const nextIndex = (currentIndex + 1) % totalSlides;

        if (index === prevIndex) {
            slide.style.left = '2%';
            slide.style.transform = 'scale(0.8)';
            slide.style.top = '0.5vw';
            slide.style.zIndex = '1';
        } else if (index === currentIndex) {
            slide.style.left = '36%';
            slide.style.transform = 'scale(1.26)';
            slide.style.top = '10%';
            slide.style.zIndex = '2';
            slide.classList.add('active');  
        } else if (index === nextIndex) {
            slide.style.left = '70%';
            slide.style.transform = 'scale(0.8)';
            slide.style.top = '0.5vw';
            slide.style.zIndex = '1';
        } else {
            slide.style.transform = 'scale(0)';
            slide.style.left = '100%';
            slide.style.zIndex = '0';
        }
    });
}

// Habilitar movimiento al hacer clic en las imágenes
document.querySelectorAll('.slider-img').forEach((slide, index) => {
    slide.addEventListener('click', () => {
        const direction = index > currentIndex ? 1 : -1;
        moveSlide(direction);
    });
});

// Implementación de arrastre (drag)
let startX = 0;
let isDragging = false;

document.querySelector('.slider').addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const diffX = e.clientX - startX;

    if (diffX > 50) {  // Si arrastra a la derecha
        moveSlide(-1);
        isDragging = false;
    } else if (diffX < -50) {  // Si arrastra a la izquierda
        moveSlide(1);
        isDragging = false;
    }
});

// Inicializa la primera vista
moveSlide(0);