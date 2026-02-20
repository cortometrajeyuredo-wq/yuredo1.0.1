let currentSlideAves = 0;
const slidesAves = document.querySelector('.slides-aves');
const totalSlidesAves = slidesAves.children.length;

let modalCurrentSlideAves = 0;
const modalSlidesAves = document.querySelector('.modal-slides-aves');
const totalModalSlidesAves = modalSlidesAves.children.length;

function updateSlidePositionAves() {
    slidesAves.style.transform = `translateX(-${currentSlideAves * 100}%)`;
}

function updateModalSlidePositionAves() {
    modalSlidesAves.style.transform = `translateX(-${modalCurrentSlideAves * 100}%)`;
}

function nextSlideAves() {
    if (currentSlideAves < totalSlidesAves - 1) {
        currentSlideAves++;
        updateSlidePositionAves();
    }
}

function prevSlideAves() {
    if (currentSlideAves > 0) {
        currentSlideAves--;
        updateSlidePositionAves();
    }
}

function nextModalSlideAves() {
    if (modalCurrentSlideAves < totalModalSlidesAves - 1) {
        modalCurrentSlideAves++;
        updateModalSlidePositionAves();
    }
}

function prevModalSlideAves() {
    if (modalCurrentSlideAves > 0) {
        modalCurrentSlideAves--;
        updateModalSlidePositionAves();
    }
}

// Abrir el modal y desactivar el scroll
document.querySelectorAll('.slides-aves img').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('imageModal-aves').style.display = 'flex';
        document.body.classList.add('overflow');
    });
});

// Cerrar el modal y restaurar el scroll
function closeModalAves() {
    document.getElementById('imageModal-aves').style.display = 'none';
    document.body.classList.remove('overflow');
}