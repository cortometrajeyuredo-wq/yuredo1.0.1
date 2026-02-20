import { useState, useEffect, useCallback } from 'react';
import styles from './SeccionMotMot.module.css';
import useScrollLock from '../hooks/useScrollLock';

// Imágenes del slider (Semillero Principal + Otros)
const SLIDER_ITEMS = [
    {
        src: '/static/img/semlleroPrincipal.jpeg',
        text: 'El <b>Semillero de Investigación Amazonian Motmot,</b> nombrado por una de las aves más esquivas del Vaupés, está compuesto por aprendices y egresados del SENA con más de <b>8 años de experiencia.</b> Su objetivo es reconocer las aves desde una perspectiva cultural.'
    },
    {
        src: '/static/img/MotMot_Semillero_01.png',
        text: 'Cada expedición es un viaje hacia lo desconocido. Los jóvenes aventureros capturan imágenes y sonidos que guardan la esencia del Vaupés, ayudando a conservar el equilibrio de la vida silvestre.'
    },
    {
        src: '/static/img/MotMot_Semillero_02.png',
        text: 'Los jóvenes aprenden a escuchar el lenguaje oculto de la selva. Con sus cuadernos y cámaras, documentan lo que ven y oyen, ayudando a conservar el hábitat de las aves.'
    },
    {
        src: '/static/img/MotMot_Semillero_03.png',
        text: 'Cada salida de avistamiento convierte a los jóvenes en custodios del Vaupés. Observan, anotan y aprenden, sumando cada detalle para proteger el futuro de las aves.'
    },
    {
        src: '/static/img/MotMot_Semillero_04.png',
        text: 'Equipados con cámaras profesionales y cuadernos de campo, los aprendices recorren el bosque, donde cada trino y cada aleteo revelan un misterio.'
    },
    {
        src: '/static/img/MotMot_Semillero_05.png',
        text: 'En sus salidas, los aprendices recorren la selva como los ojos y oídos del Vaupés. Registran cantos y vuelos, descubriendo cada detalle para contribuir al conocimiento.'
    }
];

// Imágenes de la galería del Modal
const GALLERY_IMAGES = [
    '/static/img/MotMot_Semillero_01.png',
    '/static/img/MotMot_Semillero_02.png',
    '/static/img/MotMot_Semillero_03.png',
    '/static/img/MotMot_Semillero_04.png',
    '/static/img/MotMot_Semillero_05.png',
    '/static/img/semlleroPrincipal.jpeg'
];

const SeccionMotMot = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentModalIndex, setCurrentModalIndex] = useState(0);

    // Bloqueo de scroll global
    useScrollLock(isModalOpen);

    // Navegación del slider principal
    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % SLIDER_ITEMS.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + SLIDER_ITEMS.length) % SLIDER_ITEMS.length);
    }, []);

    // Navegación del slider modal
    const nextModalSlide = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentModalIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, []);

    const prevModalSlide = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentModalIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }, []);


    // Cerrar modal con ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) setIsModalOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen]);

    const handleOpenModal = (index: number = 0) => {
        setCurrentModalIndex(index);
        setIsModalOpen(true);
    };

    return (
        <section className={styles.section2} id="motmot">
            {/* Fondo decorativo */}
            <img src="/static/img/fondo2.png" className={styles.imgFondo} alt="" />
            <div className={styles.dianas}>
                <img src="/static/img/dianas_sect2.svg" alt="" />
            </div>

            {/* Contenido Principal (Flexbox Overlay) */}
            <div className={styles.mainContent}>

                {/* Encabezado: Logo y Títulos */}
                <div className={styles.headerRegion}>

                    {/* Estrellas decorativas (Absolute dentro de relative header) */}
                    <div className={styles.estrellasHeader}>
                        <img src="/static/img/star-2_1.svg" className={styles.estrella1} alt="" />
                        <img src="/static/img/start-2_2.svg" className={styles.estrella2} alt="" />
                        <img src="/static/img/start-2_4.svg" className={styles.estrella3} alt="" />
                    </div>

                    <div className={styles.titlesContainer}>
                        <h5 className={styles.subtitle}>Semillero</h5>
                        <h3 className={styles.title}>Mot Mot</h3>
                    </div>
                </div>

                {/* Zona Interactiva: Botón, Slider, Texto */}
                <div className={styles.interactiveRegion}>
                    {/* Botón Saber Más */}
                    <div className={styles.btnWrapper}>
                        <img
                            src="/static/img/btn-mas-svg.svg"
                            alt="Saber más"
                            onClick={() => handleOpenModal(0)}
                        />
                    </div>

                    {/* Slider 2D */}
                    <div className={styles.sliderWrapper}>
                        <button className={styles['control-prev']} onClick={prevSlide}>&#10094;</button>

                        <div className={styles['slider-container']}>
                            {SLIDER_ITEMS.map((item, index) => {
                                let itemClass = styles.hidden;
                                if (index === currentIndex) itemClass = styles.active;
                                else if (index === (currentIndex - 1 + SLIDER_ITEMS.length) % SLIDER_ITEMS.length) itemClass = styles.prev;
                                else if (index === (currentIndex + 1) % SLIDER_ITEMS.length) itemClass = styles.next;

                                return (
                                    <div
                                        key={index}
                                        className={`${styles['slider-item']} ${itemClass}`}
                                        onClick={() => index === currentIndex ? handleOpenModal(index) : setCurrentIndex(index)}
                                    >
                                        <img src={item.src} alt={`Slide ${index}`} />
                                    </div>
                                );
                            })}
                        </div>

                        <button className={styles['control-next']} onClick={nextSlide}>&#10095;</button>
                    </div>

                    {/* Texto descriptivo */}
                    <div className={styles.textWrapper}>
                        <h4 dangerouslySetInnerHTML={{ __html: SLIDER_ITEMS[currentIndex].text }} />
                    </div>
                </div>

            </div>

            {/* Modal de Slider (Reemplaza Galería) */}
            <div
                className={`${styles['modal-overlay']} ${isModalOpen ? styles['modal-active'] : ''}`}
                onClick={() => setIsModalOpen(false)}
            >
                <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                    <button className={styles['close-btn']} onClick={() => setIsModalOpen(false)}>&times;</button>

                    <div className={styles['modal-slider-container']}>
                        <button className={styles['modal-prev']} onClick={prevModalSlide}>&#10094;</button>
                        {GALLERY_IMAGES.map((src, idx) => (
                            <div
                                key={idx}
                                className={`${styles['modal-slider-item']} ${idx === currentModalIndex ? styles.active : ''}`}
                            >
                                <img src={src} className={styles['gallery-item']} alt={`Proyecto ${idx + 1}`} />
                            </div>
                        ))}
                        <button className={styles['modal-next']} onClick={nextModalSlide}>&#10095;</button>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default SeccionMotMot;
