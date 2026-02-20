// Seleccionar elementos principales
var nextBtn = document.querySelector('.next-sect5-modal'),
    prevBtn = document.querySelector('.prev-sect5-modal'),
    carousel = document.querySelector('.carousel-sect5'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel-sect5 .timeRunning');




let timeRunning = 3000;
let timeAutoNext = 7000;

// Eventos para navegación manual
nextBtn.onclick = function () {
    showSlider('next-sect5-modal');
};

prevBtn.onclick = function () {
    showSlider('prev-sect5-modal');
};

// Configuración automática
let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

// Inicializar Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 40 },
        1024: { slidesPerView: 4, spaceBetween: 50 },
    },
});

// Funcionalidad del modal
const modal = document.getElementById("imageModal");
const closeModal = document.getElementById("closeModal");
const hamburger = document.querySelector('.hamburger');
const contenedorSocial = document.querySelector('#contedenedor_social');





// Abrir el modal y deshabilitar el scroll
document.querySelectorAll('.swiper-slide img').forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Deshabilitar scroll


        // Ocultar el botón .hamburger y .contenedor_social
        hamburger.style.display = "none";
        contenedorSocial.style.display = "none";
    });
});

// Cerrar el modal y habilitar el scroll
closeModal.addEventListener('click', function () {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Restaurar scroll


    // Mostrar el botón .hamburger y .contenedor_social
    hamburger.style.display = "block";
    contenedorSocial.style.display = "block";


});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restaurar scroll


        // Mostrar el botón .hamburger y .contenedor_social
        hamburger.style.display = "block";
        contenedorSocial.style.display = "block"; 
    }
});

// Función para restablecer la animación
function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // Forzar el reflujo
    runningTime.style.animation = 'runningTime 4s linear 1 forwards';
}

// Mostrar carrusel con navegación
function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel-sect5 .list .item');
    if (type === 'next-sect5-modal') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next-sect5-modal');
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev-sect5-modal');
    }

    // Limpiar clases y reiniciar tiempos
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next-sect5-modal');
        carousel.classList.remove('prev-sect5-modal');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation(); // Reiniciar la animación
}

// Iniciar la animación inicial
resetTimeAnimation();
