document.addEventListener('DOMContentLoaded', () => {
    // Slider grande
    const slides = document.querySelectorAll('.slider-item-sect2');
    const texts = [
        `<h4>
                    El <b>Semillero de Investigación Amazonian Motmot,</b> nombrado por una de las aves
                    más esquivas del Vaupés, está compuesto por aprendices y egresados del SENA
                    con más de <b>8 años de experiencia.</b> Su objetivo es reconocer las aves desde una
                    perspectiva cultural, resaltando su conexión con la selva y las prácticas de las etnias
                    locales.
                    
                </h4>`,
        `<h4>
        Cada expedición es un viaje hacia lo desconocido. Los jóvenes aventureros, 
capturan imágenes y sonidos que guardan la esencia del Vaupés, ayudando a 
conservar el equilibrio de la vida silvestre.

        </h4>`,
       `<h4>
       Los jóvenes aprenden a escuchar el lenguaje oculto de la selva. Con sus cuadernos 
y cámaras, documentan lo que ven y oyen, ayudando a conservar el hábitat de las 
aves y fortaleciendo el vínculo entre el ser humano y la naturaleza.

       </h4>`,
        `<h4>
        Cada salida de avistamiento convierte a los jóvenes en custodios del Vaupés. 
Observan, anotan, y aprenden, sumando cada detalle para proteger el futuro de 
las aves y del ecosistema que comparten

        </h4>`,
        `<h4>
        Equipados con cámaras profesionales y cuadernos de campo, los aprendices 
recorren el bosque, donde cada trino y cada aleteo revelan un misterio. Sus 
registros ayudan a conservar el equilibrio natural y protegen el futuro de las aves 
en su hábitat.

        </h4>`,
        `<h4>
        En sus salidas, los aprendices recorren la selva como los ojos y oídos del Vaupés. 
Registran cantos y vuelos, descubriendo cada detalle para contribuir al 
conocimiento de un mundo donde cada ave guarda un secreto.
        </h4>`
    ];
    const textElement = document.querySelector('.sect2-texto');
    let currentIndex = 0;

    function updateSliderGrande() {
        slides.forEach((slide, i) => {
            slide.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            if (i === currentIndex) {
                slide.style.transform = 'translateX(0) scale(1)';
                slide.style.opacity = '1';
                slide.style.zIndex = '2';
            } else if (i === (currentIndex - 1 + slides.length) % slides.length) {
                slide.style.transform = 'translateX(-100%) scale(0.8)';
                slide.style.opacity = '0.5';
                slide.style.zIndex = '1';
            } else if (i === (currentIndex + 1) % slides.length) {
                slide.style.transform = 'translateX(100%) scale(0.8)';
                slide.style.opacity = '0.5';
                slide.style.zIndex = '1';
            } else {
                slide.style.transform = 'translateX(200%) scale(0)';
                slide.style.opacity = '0';
                slide.style.zIndex = '0';
            }
        });

        textElement.innerHTML = texts[currentIndex];
    }

    function moveSliderGrande(direction) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        updateSliderGrande();
    }

    // Event listeners para los botones de navegación del slider grande
    document.querySelector('.prev-sect2').addEventListener('click', () => moveSliderGrande(-1));
    document.querySelector('.next-sect2').addEventListener('click', () => moveSliderGrande(1));

    // Inicializar el slider grande
    updateSliderGrande();

});
