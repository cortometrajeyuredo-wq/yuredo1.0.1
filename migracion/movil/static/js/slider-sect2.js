let currentIndex = 0;
const images = [
    { src: './static/img/semlleroPrincipal.jpeg', text: `  
El Semillero de Investigación Amazonian Motmot, nombrado por una de las aves
más esquivas del Vaupés, está compuesto por aprendices y egresados del SENA
con más de 8 años de experiencia. Su objetivo es reconocer las aves desde una
perspectiva cultural, resaltando su conexión con la selva y las prácticas de las etnias
locales.
`},
    { src: './static/img/MotMot_Semillero_01.png', text:   `
        Cada expedición es un viaje hacia lo desconocido. Los jóvenes aventureros, 
capturan imágenes y sonidos que guardan la esencia del Vaupés, ayudando a 
conservar el equilibrio de la vida silvestre.

        ` },
    { src: './static/img/MotMot_Semillero_02.png', text:  `
       Los jóvenes aprenden a escuchar el lenguaje oculto de la selva. Con sus cuadernos 
y cámaras, documentan lo que ven y oyen, ayudando a conservar el hábitat de las 
aves y fortaleciendo el vínculo entre el ser humano y la naturaleza.

       ` },
    { src: './static/img/MotMot_Semillero_03.png', text:  `
        Cada salida de avistamiento convierte a los jóvenes en custodios del Vaupés. 
Observan, anotan, y aprenden, sumando cada detalle para proteger el futuro de 
las aves y del ecosistema que comparten

        `},
    { src: './static/img/MotMot_Semillero_04.png', text: `
        Equipados con cámaras profesionales y cuadernos de campo, los aprendices 
recorren el bosque, donde cada trino y cada aleteo revelan un misterio. Sus 
registros ayudan a conservar el equilibrio natural y protegen el futuro de las aves 
en su hábitat.

        ` },
    { src: './static/img/MotMot_Semillero_05.png', text: `
        En sus salidas, los aprendices recorren la selva como los ojos y oídos del Vaupés. 
Registran cantos y vuelos, descubriendo cada detalle para contribuir al 
conocimiento de un mundo donde cada ave guarda un secreto.
        ` }
];

const sliderImg = document.getElementById('slider-img');
const sliderText = document.querySelector('.textoMot ');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slider= document.querySelector('.slider-img');

let isDragging = false;
let startPosX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

// Actualiza la imagen y el texto según el índice actual
function updateSlider(index) {
    sliderImg.src = images[index].src;
    sliderText.innerHTML = images[index].text;
}

// Funciones de cambiar de imagen con flechas
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider(currentIndex);
}

// Eventos de clic para los botones de navegación
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Funcionalidad de arrastre
slider.addEventListener('mousedown', startDragging);
slider.addEventListener('mouseup', stopDragging);
slider.addEventListener('mousemove', onDrag);
slider.addEventListener('mouseleave', stopDragging);

// Para dispositivos móviles
slider.addEventListener('touchstart', startDragging);
slider.addEventListener('touchend', stopDragging);
slider.addEventListener('touchmove', onDrag);


function startDragging(e) {
    isDragging = true;
    startPosX = getPositionX(e);
    animationID = requestAnimationFrame(animation);
}

function stopDragging() {
    if (isDragging) {
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;

        // Desliza si se movió lo suficiente
        if (movedBy < -100) {
            nextImage();
        } else if (movedBy > 100) {
            prevImage();
        }

        // Resetea la posición de traducción
        currentTranslate = 0;
        prevTranslate = 0;
    }
}

function onDrag(e) {
    if (isDragging) {
        const currentPosition = getPositionX(e);
        currentTranslate = prevTranslate + currentPosition - startPosX;
    }
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function animation() {
    if (isDragging) {
        requestAnimationFrame(animation);
    }
}

// Inicia con la primera imagen y texto
updateSlider(currentIndex);
