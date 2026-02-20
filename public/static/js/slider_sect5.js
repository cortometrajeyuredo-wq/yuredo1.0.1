// Seleccionamos los elementos necesarios
const sliderSect5 = document.querySelector('.slider-sect5');
const slidesSect5 = document.querySelectorAll('.slide-sect5');
const txtElementSect5 = document.querySelector('.txt2');


// Array de textos correspondientes a cada slide
const textContentSect5 = [
    `<h4>Embárcate en un viaje mágico</h4>
En cada podcast, las aves del Vaupés susurran sus secretos. Déjate envolver por
relatos llenos de encanto y descubre un mundo donde el canto y la leyenda se
encuentran. ¡Escucha ahora!.`,
       `<h4>La Magia de las Alas</h4>
Escucha las maravillosas historias de las aves del Vaupés en nuestra sección de 
podcasts. Sumérgete en relatos que capturan la esencia de la selva y viaja con 
nosotros a través de cada canto y cada vuelo.`,
    `<h4>Susurros del Vaupés</h4>
Aquí, las aves nos revelan los secretos de la selva en cada podcast. Escucha sus 
relatos y descubre el espíritu del Vaupés en cada trino y cada leyenda. ¡Únete a la 
aventura!`,
  
];

// Índice actual del slide
let currentIndexSect5 = 0;

// Función para actualizar la posición del slider y el texto
function updateSliderPositionSect5() {
    sliderSect5.style.transform = `translateX(${-currentIndexSect5 * 100}%)`;
    txtElementSect5.innerHTML = textContentSect5[currentIndexSect5];
}

// Función para mover el slide en la dirección dada
function moveSlideSect5(direction) {
    currentIndexSect5 = (currentIndexSect5 + direction + slidesSect5.length) % slidesSect5.length;
    updateSliderPositionSect5();
}

// Asignar eventos a los botones de navegación
document.getElementById('prev-sect5').addEventListener('click', () => moveSlideSect5(-1));
document.getElementById('next-sect5').addEventListener('click', () => moveSlideSect5(1));

// Inicializar el slider al cargar la página
updateSliderPositionSect5();

(function() {
    let currentIndex = 0;  // Índice de la imagen actual
    const slides = document.querySelectorAll('.slider_sect4 > div');  // Seleccionar todas las imágenes
    const totalSlides = slides.length;  // Número total de imágenes
    const slideWidth = 100 / 4;  // Cada imagen ocupa el 25% del contenedor (4 imágenes visibles)
    const totalVisibleSlides = 4;  // Número de imágenes visibles (4)

    const prevArrow = document.getElementById('leftArrow');
    const nextArrow = document.getElementById('rightArrow');

    // Función para actualizar la posición del slider
    function showSlide(index) {
        if (index >= totalSlides - totalVisibleSlides) {
            currentIndex = totalSlides - totalVisibleSlides;  // No permitir pasar del final
            nextArrow.disabled = true;  // Deshabilitar la flecha derecha si estamos al final
        } else if (index < 0) {
            currentIndex = 0;  // No permitir que el índice sea menor que 0
            prevArrow.disabled = true;  // Deshabilitar la flecha izquierda si estamos al principio
        } else {
            currentIndex = index;
            nextArrow.disabled = false;
            prevArrow.disabled = false;
        }

        // Desplazamos las imágenes dentro del contenedor
        const offset = -(currentIndex * slideWidth);  // Calcular el desplazamiento
        document.querySelector('.slider_sect4').style.transform = `translateX(${offset}%)`;
    }

    // Evento para mover hacia atrás
    prevArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);  // Mover hacia atrás
        }
    });

    // Evento para mover hacia adelante
    nextArrow.addEventListener('click', () => {
        if (currentIndex < totalSlides - totalVisibleSlides) {
            showSlide(currentIndex + 1);  // Mover hacia adelante
        }
    });

    // Inicializar el slider al principio
    showSlide(currentIndex);
})();
