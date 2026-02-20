// Slider de la Sección 6
let currentIndexSect6 = 0;
const imagesSect6 = [
    { src: './static/avatares/sra gloria.svg', text: 'Gloria Rivera',profesion:'Investigadora líder de Enfoque Éntnico',portfolio:'' },
    { src: './static/avatares/profe leonardo bernal.svg', text: 'Leonardo huertas Bernal',profesion:'Director',portfolio:'' },
    { src: './static/avatares/profe luis salcedo.svg', text: 'Luis Enrique Salcedo',profesion:'Technical Director 3d',portfolio:'' },
    { src: './static/avatares/luis enrique llanos.svg', text: 'Luis Enrrique Llanos',profesion:'Sabedor Tradicional Pamiwa',portfolio:'' },
    { src: './static/avatares/profe ivonne espindola.svg', text: 'Ivonne Espindola',profesion:'VFX',portfolio:'' },
    { src: './static/avatares/fabian rodriguez traductor.svg', text: 'Fabián Rodriguez',profesion:'Traductor de lengua Pamie',portfolio:'' },
    { src: './static/avatares/yenifer lopez.svg', text: 'Yenifer Lopez',profesion:'Investigador junior',portfolio:'' },
    { src: './static/avatares/angelica beltran.svg', text: 'Angelica Beltran',profesion:'Animador 3D',portfolio:'' },
    { src: './static/avatares/cristina arce.svg', text: 'Critina Arce Nieto',profesion:'Animador 3D',portfolio:'' },
    { src: './static/avatares/daniel galindo.svg', text: 'Daniel Felipe Galindo',profesion:'Animador 3D',portfolio:'' },
    { src: './static/avatares/daniel ocampo.svg', text: 'Daniel Ricardo Ocampo',profesion:'Animador 3D y Artista Conceptual', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/edgar felipe co.svg', text: 'Felipe Cortez',profesion:'Dinamizador SENNOVA Vaupés', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/jhon gerardo.svg', text: 'Jhonge',profesion:'Desarrollador de  Software y Web', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/iohann vargas.svg', text: 'Iohan Vargas',profesion:'Animador 3D', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/jorge bolaños.svg', text: 'Jorge Luis Bolaños',profesion:'Diseño visual Publicidad y Marketing', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/leiner barros.svg', text: 'Leiner Barros Agamez',profesion:'Desarrollo Publicitario y Sonoro', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/luisa rodriguez.svg', text: 'Luisa Fernanda Rodriguez',profesion:'Animador 3D', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/nicolas ramirez.svg', text: 'Nicolas Andrés Ramirez',profesion:'Animador 3D', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/nubia bocanegra.svg', text: 'Nubia Esperanza Bonilla',profesion:'Desarrollo Psublicitario', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/sharick.svg', text: 'Sharyk Sofia Gómez',profesion:'Desarrollo Web y Multimedía', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/sara acosta.svg', text: 'Sara Lucia Acosta',profesion:'Diseño Gráfico y Asistente de Producción', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
    { src: './static/avatares/sebastian guerrero.svg', text: 'Sebastian Guerrero',profesion:'Biólogo', portfolio: 'https://www.linkedin.com/in/jhon-gerardo-plazas-0731a021b' },
   


];

// Seleccionamos los elementos DOM para la sección 6
const sliderImgSect6 = document.getElementById('slider-imgSect6');
const sliderTextSect6 = document.querySelector('.textoSect6 h6');
const profesion=document.querySelector('.textoSect6 span');
const portfolioLinkSect6 = document.querySelector('.textoSect6 a');
const prevBtnSect6 = document.getElementById('prevSect6');
const nextBtnSect6 = document.getElementById('nextSect6');

// Función para actualizar la imagen y el texto de la sección 6
function updateSliderSect6(index) {
    sliderImgSect6.src = imagesSect6[index].src;
    sliderTextSect6.textContent = imagesSect6[index].text;
    profesion.textContent=imagesSect6[index].profesion;
    portfolioLinkSect6.href = imagesSect6[index].portfolio;
}

// Funciones para navegar entre las imágenes de la sección 6
function nextImageSect6() {
    currentIndexSect6 = (currentIndexSect6 + 1) % imagesSect6.length;
    updateSliderSect6(currentIndexSect6);
}

function prevImageSect6() {
    currentIndexSect6 = (currentIndexSect6 - 1 + imagesSect6.length) % imagesSect6.length;
    updateSliderSect6(currentIndexSect6);
}

// Añadimos los listeners a los botones de la sección 6
nextBtnSect6.addEventListener('click', nextImageSect6);
prevBtnSect6.addEventListener('click', prevImageSect6);

// Iniciamos con la primera imagen para la sección 6
updateSliderSect6(currentIndexSect6);


// ---- Funcionalidad de arrastre (swipe) para Sección 6 ----
// Variables para almacenar la posición de inicio y final del touch
let touchStartXSect6 = 0;
let touchEndXSect6 = 0;

// Función para detectar el arrastre (swipe)
function handleSwipeSect6() {
    if (touchEndXSect6 < touchStartXSect6) {
        // Si se arrastra hacia la izquierda, se va a la siguiente imagen
        nextImageSect6();
    }
    if (touchEndXSect6 > touchStartXSect6) {
        // Si se arrastra hacia la derecha, se va a la imagen anterior
        prevImageSect6();
    }
}

// Event listeners para el inicio y final del touch en dispositivos móviles para sección 6
sliderImgSect6.addEventListener('touchstart', (e) => {
    touchStartXSect6 = e.changedTouches[0].screenX;
});

sliderImgSect6.addEventListener('touchend', (e) => {
    touchEndXSect6 = e.changedTouches[0].screenX;
    handleSwipeSect6();
});
