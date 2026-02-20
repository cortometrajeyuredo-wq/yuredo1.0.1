// Slider de la Sección 5
let currentIndexSect5 = 0;
const imagesSect5 = [
    {
        src: './static/img/', text: `Embárcate en un viaje mágico
En cada podcast, las aves del Vaupés susurran sus secretos. 
Déjate envolver por relatos llenos de encanto y descubre un mundo donde el 
canto y la leyenda se encuentran. ¡Escucha ahora!.` },
    {
        src: './static/img/MotMot_Aves_01.png', text: `Chelidoptera Tenebrosa
Guardiana de las Sombras
Con su plumaje oscuro y su vuelo sigiloso, la Chelidoptera tenebrosa surca 
los rincones más sombríos del Vaupés. En cada avistamiento, esta ave nos 
recuerda la magia escondida en la penumbra de la selva.

` },
    {
        src: './static/img/MotMot_Aves_02.png', text: `Galbula Leucogastra
Flecha de Esmeralda
Brillante y elegante, la Galbula leucogastra atraviesa los cielos con 
destellos verdes y blancos, como una flecha esmeralda en movimiento. 
Sus colores capturan la luz de la selva, trayendo vida a cada rincón 
que toca.` },
    {
        src: './static/img/MotMot_Aves_03.png', text: `Jacamerops Aureus
Destello Dorado de la Selva
La Jacamerops aureus, con su plumaje dorado, ilumina su entorno como un 
rayo de sol en la sombra. Su canto profundo resuena en la selva, 
como un eco antiguo que conecta la tierra y el cielo..` },
    {
        src: './static/img/MotMot_Aves_04.png', text: `Monasa Morphoeus
Espíritu de los Bosques
La Monasa morphoeus, con su oscura presencia, aparece en silencio entre los árboles, 
evocando la sabiduría de los bosques. Misteriosa y majestuosa, 
es un guardián de secretos ancestrales en cada rama.` },
    {
        src: './static/img/MotMot_Aves_05.png', text: `Athene Cunicularia
Ojos de la Noche
Pequeña pero poderosa, la Athene cunicularia observa desde su madriguera 
con ojos que penetran la noche. Esta pequeña lechuza simboliza el 
misterio de la noche y la paciencia de los antiguos guardianes.` },
    {
        src: './static/img/MotMot_Aves_06.png', text: `Myiarchus Tuberculife
Voz del Amanecer
La Myiarchus tuberculifer llena las primeras horas del día con su canto alegre. 
Su voz, fuerte y clara, despierta la selva al amanecer, como un mensajero que 
saluda el nuevo día.` },
    {
        src: './static/img/MotMot_Aves_07.png', text: `Mimo Thryothorus Multoestriatusr
Guardián de los Cantos
Con su voz melódica y su plumaje sutil, el Mimo thryothorus multoestriatus 
embellece la selva con cada trino. Es el guardián de las canciones que llenan 
el Vaupés de armonía.` },
    {
        src: './static/img/MotMot_Aves_08.png', text: `Myrmotherula Cherriei
Hada de los Árboles
Pequeña y ágil, la Myrmotherula cherriei se desliza entre las ramas como un susurro. 
Esta diminuta ave parece un hada que danza entre las hojas, 
llevando consigo la magia de la naturaleza` },
    {
        src: './static/img/MotMot_Aves_9.png', text: `Dendrocincla Merula
Vigía de los Árboles Viejos
La Dendrocincla merula habita en los árboles más antiguos, trepando en busca de vida escondida. 
Con su presencia serena, nos recuerda el valor de los guardianes silentes de la selva.` },
    {
        src: './static/img/MotMot_Aves_10.png', text: `Hypocnemis Hypoxanthai
Eco Dorado
La Hypocnemis hypoxantha resplandece con tonos dorados que resaltan entre la espesura. 
Su canto es un eco brillante que nos invita a descubrir la luz oculta en lo profundo 
del bosque.` },
    {
        src: './static/img/MotMot_Aves_11.png', text: `Notharchus hyperrhynchus
Bobo de Collar
Con su plumaje detallado y su pico negro imponente, 
el Bobo de Collar se mueve con gracia, llevando consigo la esencia de los 
paisajes más profundos del Vaupés..` },
];

// Seleccionamos los elementos DOM para la sección 5
const sliderImgSect5 = document.getElementById('slider-imgSect5');
const sliderTextSect5 = document.querySelector('.textoSect5 h5');
const prevBtnSect5 = document.getElementById('prevSect5');
const nextBtnSect5 = document.getElementById('nextSect5');

// Función para actualizar la imagen y el texto de la sección 5
function updateSliderSect5(index) {
    sliderImgSect5.src = imagesSect5[index].src;
    sliderTextSect5.textContent = imagesSect5[index].text;
}

// Funciones para navegar entre las imágenes de la sección 5
function nextImageSect5() {
    currentIndexSect5 = (currentIndexSect5 + 1) % imagesSect5.length;
    updateSliderSect5(currentIndexSect5);
}

function prevImageSect5() {
    currentIndexSect5 = (currentIndexSect5 - 1 + imagesSect5.length) % imagesSect5.length;
    updateSliderSect5(currentIndexSect5);
}

// Añadimos los listeners a los botones de la sección 5
nextBtnSect5.addEventListener('click', nextImageSect5);
prevBtnSect5.addEventListener('click', prevImageSect5);

// Iniciamos con la primera imagen para la sección 5
updateSliderSect5(currentIndexSect5);


// ---- Funcionalidad de arrastre (swipe) para Sección 5 ----
// Variables para almacenar la posición de inicio y final del touch
let touchStartXSect5 = 0;
let touchEndXSect5 = 0;

// Función para detectar el arrastre (swipe)
function handleSwipeSect5() {
    if (touchEndXSect5 < touchStartXSect5) {
        // Si se arrastra hacia la izquierda, se va a la siguiente imagen
        nextImageSect5();
    }
    if (touchEndXSect5 > touchStartXSect5) {
        // Si se arrastra hacia la derecha, se va a la imagen anterior
        prevImageSect5();
    }
}

// Event listeners para el inicio y final del touch en dispositivos móviles para sección 5
sliderImgSect5.addEventListener('touchstart', (e) => {
    touchStartXSect5 = e.changedTouches[0].screenX;
});

sliderImgSect5.addEventListener('touchend', (e) => {
    touchEndXSect5 = e.changedTouches[0].screenX;
    handleSwipeSect5();
});
