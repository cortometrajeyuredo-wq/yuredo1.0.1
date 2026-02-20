



let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let textContainer = document.getElementById('slider-text');
let carousel = document.querySelector('.carousel');
let carouselItems = document.querySelectorAll('.carousel-item');
let carouselNext = document.getElementById('carousel-next');
let carouselPrev = document.getElementById('carousel-prev');
let carouselIndex = 0;
let visibleItems = 4;

let active = 0; // Índice del ítem actual
const texts = [
    `Texto relacionado con la imagen 1
     Lorem Ipsum es el término para 
     referirnos a un texto falso que 
     simula caracteres latinos y que 
     utilizamos para ver de un modo 
     rápido cómo quedaría una página 
     con el contenido; antes de tener 
     el texto definitivo, para componer 
     fácilmente la maqueta.`,
    `Texto relacionado con la imagen 2`,
    `Texto relacionado con la imagen 3`,
     `Texto relacionado con la imagen 4`,
    `Texto relacionado con la imagen 5`,
    `Texto relacionado con la imagen 6`,
      `Texto relacionado con la imagen 7`,
    // ... más textos ...
];

// Actualiza la posición y el estilo de los ítems del slider
function updateItems() {
    items.forEach((item, index) => {
        if (index === active) {
            item.style.transform = `none`;
            item.style.zIndex = 1;
            item.style.filter = 'none';
            item.style.opacity = 1;
        } else if (index > active) {
            item.style.transform = `translateX(${120 * (index - active)}px) scale(${1 - 0.2 * (index - active)}) perspective(16px) rotateY(-1deg)`;
            item.style.zIndex = -(index - active);
            item.style.filter = 'blur(5px)';
            item.style.opacity = index - active > 2 ? 0 : 0.6;
        } else {
            item.style.transform = `translateX(${-120 * (active - index)}px) scale(${1 - 0.2 * (active - index)}) perspective(16px) rotateY(1deg)`;
            item.style.zIndex = -(active - index);
            item.style.filter = 'blur(5px)';
            item.style.opacity = active - index > 2 ? 0 : 0.6;
        }
    });
}

// Actualiza la posición del carrusel y el texto
function updateCarouselAndText() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
    });
    carouselItems[active].classList.add('active');
    
    textContainer.innerHTML = texts[active];
    updateItems();
}

// Eventos de los botones de navegación del slider
next.addEventListener('click', () => {
    active = (active + 1) % items.length;
    updateCarouselAndText();
});

prev.addEventListener('click', () => {
    active = (active - 1 + items.length) % items.length;
    updateCarouselAndText();
});

// Eventos de los botones de navegación del carrusel
carouselNext.addEventListener('click', () => {
    active = (active + 1) % carouselItems.length;
    updateCarouselAndText();
});

carouselPrev.addEventListener('click', () => {
    active = (active - 1 + carouselItems.length) % carouselItems.length;
    updateCarouselAndText();
});

// Añadir evento click a los ítems del carrusel para sincronizar ambos sliders
carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        active = index;
        updateCarouselAndText();
    });
});

// Añadir evento click a los ítems del slider para sincronizar ambos sliders
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        active = index;
        updateCarouselAndText();
    });
});

function updateCarousel() {
    const offset = -carouselIndex * (carouselItems[0].offsetWidth + 10); // Ajusta según el ancho del ítem + margen
    carouselItems.forEach((item) => {
        item.style.transform = `translateX(${offset}px)`;
    });
}

document.getElementById('carousel-next').addEventListener('click', () => {
    carouselIndex++;
    if (carouselIndex > carouselItems.length - visibleItems) {
        carouselIndex = 0; // Reinicia al principio si se sobrepasa el final
    }
    updateCarousel();
});

document.getElementById('carousel-prev').addEventListener('click', () => {
    carouselIndex--;
    if (carouselIndex < 0) {
        carouselIndex = carouselItems.length - visibleItems; // Va al final si se sobrepasa el principio
    }
    updateCarousel();
});





// Inicializa el carrusel en la posición correcta
updateCarousel();

// Inicializar la visualización
updateCarouselAndText();
