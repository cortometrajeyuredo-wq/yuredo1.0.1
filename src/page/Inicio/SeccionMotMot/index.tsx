import { useState, useEffect, useCallback } from 'react';
import styles from './SeccionMotMot.module.css';
import useBloqueoScroll from '@/hooks/useBloqueoScroll';
import { slidesSemillero, imagenesGaleriaSemillero } from '@/data/semillero';
import EstrellasFondo from '@/components/EstrellasFondo';

/**
 * @módulo SeccionMotMot
 * @descripción Sección dedicada al Semillero de Investigación Amazonian Mot Mot.
 * Incluye un slider informativo y un modal de galería de proyectos.
 * @arquitectura src/page/Inicio/SeccionMotMot/index.tsx
 */

const SeccionMotMot = () => {
    // --- Estados de Navegación ---

    /** Índice de la diapositiva informativa activa en el slider principal */
    const [indiceActivo, setIndiceActivo] = useState(0);
    /** Controla la visibilidad del modal de la galería de imágenes */
    const [isModalOpen, setIsModalOpen] = useState(false);
    /** Índice de la imagen que se muestra actualmente en el carrusel del modal */
    const [indiceModal, setIndiceModal] = useState(0);

    // --- Hooks y Efectos ---

    // Bloqueo de scroll cuando el modal está abierto para mejorar la UX
    useBloqueoScroll(isModalOpen);

    /**
     * Avanza circularmente entre las diapositivas del slider principal.
     */
    const avanzarSlide = useCallback(() => {
        setIndiceActivo((prev) => (prev + 1) % slidesSemillero.length);
    }, []);

    /**
     * Retrocede circularmente entre las diapositivas del slider principal.
     */
    const retrocederSlide = useCallback(() => {
        setIndiceActivo((prev) => (prev - 1 + slidesSemillero.length) % slidesSemillero.length);
    }, []);

    /**
     * Avanza entre las imágenes de la galería dentro del modal.
     */
    const avanzarModal = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIndiceModal((prev) => (prev + 1) % imagenesGaleriaSemillero.length);
    }, []);

    /**
     * Retrocede entre las imágenes de la galería dentro del modal.
     */
    const retrocederModal = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIndiceModal((prev) => (prev - 1 + imagenesGaleriaSemillero.length) % imagenesGaleriaSemillero.length);
    }, []);

    /**
     * Listener para cerrar el modal de galería al presionar la tecla Escape.
     */
    useEffect(() => {
        const manejarTecla = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) setIsModalOpen(false);
        };
        document.addEventListener('keydown', manejarTecla);
        return () => document.removeEventListener('keydown', manejarTecla);
    }, [isModalOpen]);

    /**
     * Prepara y abre el modal en una posición específica.
     * @param indice Posición inicial de la galería (defecto: 0)
     */
    const abrirModal = (indice: number = 0) => {
        setIndiceModal(indice);
        setIsModalOpen(true);
    };

    return (
        <section className={styles.section2} id="motmot">
            {/* Estrellas dinámicas según el JS legacy */}
            <EstrellasFondo cantidad={60} leftMin={20} leftMax={90} className={styles.estrellasFondo} />

            {/* Decoración: dianas */}
            <div className={styles.dianas}>
                <img src="/static/img/dianas_sect2.svg" alt="" />
            </div>

            {/* Contenido Principal */}
            <div className={styles.mainContent}>

                {/* Encabezado: Logo y Títulos */}
                <div className={`${styles.headerRegion} reveal`}>
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
                            onClick={() => abrirModal(0)}
                        />
                    </div>

                    {/* Slider */}
                    <div className={styles.sliderWrapper}>
                        <button className={styles['control-prev']} onClick={retrocederSlide}>&#10094;</button>

                        <div className={styles['slider-container']}>
                            {slidesSemillero.map((elemento, indice) => {
                                let claseElemento = styles.hidden;
                                if (indice === indiceActivo) claseElemento = styles.active;
                                else if (indice === (indiceActivo - 1 + slidesSemillero.length) % slidesSemillero.length) claseElemento = styles.prev;
                                else if (indice === (indiceActivo + 1) % slidesSemillero.length) claseElemento = styles.next;

                                return (
                                    <div
                                        key={indice}
                                        className={`${styles['slider-item']} ${claseElemento}`}
                                        onClick={() => indice === indiceActivo ? abrirModal(indice) : setIndiceActivo(indice)}
                                    >
                                        <img src={elemento.src} alt={`Slide ${indice + 1}`} />
                                    </div>
                                );
                            })}
                        </div>

                        <button className={styles['control-next']} onClick={avanzarSlide}>&#10095;</button>
                    </div>

                    {/* Texto descriptivo */}
                    <div className={`${styles.textWrapper} reveal-right`}>
                        <h4 dangerouslySetInnerHTML={{ __html: slidesSemillero[indiceActivo].texto }} />
                    </div>
                </div>

            </div>

            {/* Modal de galería */}
            <div
                className={`${styles['modal-overlay']} ${isModalOpen ? styles['modal-active'] : ''}`}
                onClick={() => setIsModalOpen(false)}
            >
                <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                    <button className={styles['close-btn']} onClick={() => setIsModalOpen(false)}>&times;</button>

                    <div className={styles['modal-slider-container']}>
                        <button className={styles['modal-prev']} onClick={retrocederModal}>&#10094;</button>
                        {imagenesGaleriaSemillero.map((src, idx) => (
                            <div
                                key={idx}
                                className={`${styles['modal-slider-item']} ${idx === indiceModal ? styles.active : ''}`}
                            >
                                <img src={src} className={styles['gallery-item']} alt={`Proyecto ${idx + 1}`} />
                            </div>
                        ))}
                        <button className={styles['modal-next']} onClick={avanzarModal}>&#10095;</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SeccionMotMot;
