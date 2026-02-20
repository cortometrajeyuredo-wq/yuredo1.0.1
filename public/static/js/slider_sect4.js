

document.addEventListener('DOMContentLoaded', () => {
    const sliderSect4 = document.querySelector('.sect4-tres-slider');
    const slidesSect4 = document.querySelectorAll('.sect4-slide');
    const prevButtonSect4 = document.getElementById('prev-sect4');
    const nextButtonSect4 = document.getElementById('next-sect4');
    const txtElementSect4 = document.querySelector('.sect4-txt h5');

    const textContentSect4 = [
      `<strong style="color:#16142f;font-size:1.3vw;font-family:Noto+Sans;font-weight:700">Vaupés, entre plumajes, sonidos y colores V1</strong><br>
        <p style="color:#16142f;font-size:1.2vw;font-family:Noto+Sans;font-weight:300">La primera edición que da vida al proyecto. Aquí comienzan los relatos de
las etnias y sus aves, un viaje a la raíz de la cultura indígena del Vaupés
 </p>
        <br><a style="color:#16142f;fontsize:1.3;font-family:Noto+Sans;font-weight:300" href="https://repositorio.sena.edu.co/handle/11404/5387" target="_blank"> mas...</a>`,
        `<strong>Vaupés, entre plumajes, sonidos y colores V2</strong><br>
        <p style="color:#16142f";font-size:"1vw">Con cada página, esta edición nos envuelve en las historias de las aves y los
pueblos del Vaupés, un viaje donde tradición y naturaleza se entrelazan en
perfecta armonía.
</p>
        <br><a style="color:#16142f;font-size:1.2vw" href="https://repositorio.sena.edu.co/handle/11404/5706" target="_blank"> mas...</a>`,
         `<strong>Vaupés, entre plumajes,<br> sonidos y colores V3</strong><br>
       <p style="color:#16142f;font-size:1vw"> Plumajes que hablan, cantos que cuentan… En esta cartilla, las tradiciones
indígenas nos guían en un viaje hacia la esencia del Vaupés y sus coloridas
aves.</p>
        <br><a style="color:#16142f;font-size:1.2vw" href="https://repositorio.sena.edu.co/handle/11404/7547" target="_blank"> mas...</a>`,
        `<strong>Guía Fotográfica de Etnoaves</strong><br>
        <p style="color:#16142f;font-size:1.2vw">La Guía Fotográfica de Etnoaves es un tributo a la biodiversidad del Vaupés,
donde cada ave tiene un nombre y una historia en lengua Pamikamú,
conectando el pasado con el presente.</p>
        <br><a style="color:#16142f;font-size:1.2vw" href="https://repositorio.sena.edu.co/handle/11404/5755" target="_blank"> mas...</a>`
    ];

    let currentIndexSect4 = 0;
    const totalSlidesSect4 = slidesSect4.length;

    function updateSliderSect4() {
        slidesSect4.forEach((slide, index) => {
            slide.style.display = index === currentIndexSect4 ? 'block' : 'none';
        });
        txtElementSect4.innerHTML = textContentSect4[currentIndexSect4];
    }

    function moveSlideSect4(direction) {
        currentIndexSect4 += direction;
        if (currentIndexSect4 < 0) {
            currentIndexSect4 = totalSlidesSect4 - 1;
        } else if (currentIndexSect4 >= totalSlidesSect4) {
            currentIndexSect4 = 0;
        }
        updateSliderSect4();
    }

    prevButtonSect4.addEventListener('click', () => moveSlideSect4(-1));
    nextButtonSect4.addEventListener('click', () => moveSlideSect4(1));

    updateSliderSect4();
});
