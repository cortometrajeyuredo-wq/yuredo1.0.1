// Slider de la Sección 4
let currentIndexSect4 = 0;
const imagesSect4 = [
    { src: '/imgTodas/Etno_Ornitologia_02.jpg', text:` 
        <strong>Vaupés, entre plumajes, sonidos y colores V1</strong><br>
        <p>Plumajes que hablan, cantos que cuentan… En esta cartilla, las tradiciones
indígenas nos guían en un viaje hacia la esencia del Vaupés y sus coloridas
aves.
 </p>
        <a href="https://repositorio.sena.edu.co/handle/11404/5387" target="_blank">mas...</a>
` },
    { src: '/imgTodas/Etno_Ornitologia_03.jpg', text: `<strong>Vaupés, entre plumajes, sonidos y colores V2</strong><br>
        <p>Las tradiciones orales de las etnias Pamiwa, Tukano, Tuyuca, Siriano y Bara.
Aquí, la avifauna del Vaupés se revela como un tesoro cultural, tejido entre
cantos y leyendas que mantienen viva la memoria de estas comunidades</p>
        <a href="https://repositorio.sena.edu.co/handle/11404/5706" target="_blank">mas...</a>` },
    { src: '/imgTodas/CARTILLA3.png', text: `<strong>Vaupés, entre plumajes,sonidos y colores V3</strong><br>
       <p> Descubre el origen de este viaje por las aves del Vaupés. En este primer
volumen, la conexión con las etnias Pamiwa, Tucano, Yuruti, Tuyuca, Siriano
y Bara se despliega a través de saberes y prácticas culturales, en un tributo a
la biodiversidad y el legado indígena.</p>
        <a href="https://repositorio.sena.edu.co/handle/11404/7547" target="_blank">mas...</a>` },
    { src: '/imgTodas/Etno_Ornitologia_04.jpg', text:  `<strong>Guía Fotográfica de Etnoaves</strong><br>
        <p>La Guía Fotográfica de Etnoaves es un tributo a la biodiversidad del Vaupés,
donde cada ave tiene un nombre y una historia en lengua Pamikamú,
conectando el pasado con el presente.</p>
        <a href="https://repositorio.sena.edu.co/handle/11404/5755" target="_blank">mas...</a>` }
];

// Seleccionamos los elementos DOM para la sección 4
const sliderImgSect4 = document.getElementById('slider-imgSect4');
const sliderTextSect4 = document.querySelector('.textoSect4 h5');
const prevBtnSect4 = document.getElementById('prevSect4');
const nextBtnSect4 = document.getElementById('nextSect4');

// Función para actualizar la imagen y el texto de la sección 4
function updateSliderSect4(index) {
    sliderImgSect4.src = imagesSect4[index].src;
    sliderTextSect4.innerHTML = imagesSect4[index].text;
}

// Funciones para navegar entre las imágenes de la sección 4
function nextImageSect4() {
    currentIndexSect4 = (currentIndexSect4 + 1) % imagesSect4.length;
    updateSliderSect4(currentIndexSect4);
}

function prevImageSect4() {
    currentIndexSect4 = (currentIndexSect4 - 1 + imagesSect4.length) % imagesSect4.length;
    updateSliderSect4(currentIndexSect4);
}

// Añadimos los listeners a los botones de la sección 4
nextBtnSect4.addEventListener('click', nextImageSect4);
prevBtnSect4.addEventListener('click', prevImageSect4);

// Iniciamos con la primera imagen para la sección 4
updateSliderSect4(currentIndexSect4);


// ---- Funcionalidad de arrastre (swipe) ----
// Variables para almacenar la posición de inicio y final del touch
let touchStartX = 0;
let touchEndX = 0;

// Función para detectar el arrastre (swipe)
function handleSwipe() {
    if (touchEndX < touchStartX) {
        // Si se arrastra hacia la izquierda, se va a la siguiente imagen
        nextImageSect4();
    }
    if (touchEndX > touchStartX) {
        // Si se arrastra hacia la derecha, se va a la imagen anterior
        prevImageSect4();
    }
}

// Event listeners para el inicio y final del touch en dispositivos móviles
sliderImgSect4.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

sliderImgSect4.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});
