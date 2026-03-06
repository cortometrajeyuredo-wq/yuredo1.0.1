import { useState, useEffect, useCallback } from 'react';
import styles from './SeccionMuseo.module.css';
import useDeslizadorSimple from '@/hooks/useDeslizadorSimple';
import useBloqueoScroll from '@/hooks/useBloqueoScroll';
import { aves, type Ave } from '@/data/aves';
import EstrellasFondo from '@/components/EstrellasFondo';
import VideoConPlay from '@/components/VideoConPlay';

/**
 * @módulo SeccionMuseo
 * @descripción Museo Virtual de Aves del Vaupés. Presenta podcasts y una colección interactiva de aves
 * con fichas técnicas detalladas en un modal animado.
 * @arquitectura src/page/Inicio/SeccionMuseo/index.tsx
 */

const SeccionMuseo = () => {
    // --- Estados locales ---

    /** Controla la apertura del modal de detalles del ave */
    const [isModalOpen, setIsModalOpen] = useState(false);
    /** Almacena el objeto de datos de la especie seleccionada para mostrar en el modal */
    const [aveSeleccionada, setAveSeleccionada] = useState<Ave | null>(null);

    // --- Hooks ---

    // Deslizador (Swiper) de colección de aves
    const deslizador = useDeslizadorSimple({ totalDiapositivas: aves.length, diapositivasVisibles: 4 });

    // Bloqueo de scroll global cuando el modal está activo
    useBloqueoScroll(isModalOpen);

    /**
     * Muestra el modal con la información de un ave específica.
     */
    const abrirModal = useCallback((ave: Ave) => {
        setAveSeleccionada(ave);
        setIsModalOpen(true);
    }, []);

    /**
     * Cierra el modal y limpia la selección.
     */
    const cerrarModal = useCallback(() => {
        setIsModalOpen(false);
        setAveSeleccionada(null);
    }, []);

    /**
     * Listener para cerrar el modal al presionar Escape.
     */
    useEffect(() => {
        const manejarTecla = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) cerrarModal();
        };
        document.addEventListener('keydown', manejarTecla);
        return () => document.removeEventListener('keydown', manejarTecla);
    }, [isModalOpen, cerrarModal]);

    return (
        <section className={styles.section5} id="museo">
            {/* Animación de Estrellas de fondo */}
            <EstrellasFondo cantidad={50} leftMin={10} leftMax={90} className={styles.estrellasFondo} />

            {/* Decoración central de dianas */}
            <div className={styles.dianas}>
                <img src="/static/img/dianas5.png" alt="" />
            </div>

            {/* Contenido Principal */}
            <div className={styles.mainContent}>

                {/* Zona Superior: Logo y Título */}
                <div className={`${styles.topRegion} reveal`}>
                    <div className={styles.logoWrapper}>
                        <img src="/static/img/yuredo-white.png" alt="Yuredo" />
                    </div>
                    <div className={styles.titleWrapper}>
                        <h2>Podcast Aves Vaupés</h2>
                        <img className={styles.starTop} src="/static/img/star-sect5-arriba.svg" alt="" />
                    </div>
                </div>

                {/* Zona Media: Podcast (Video + Texto) */}
                <div className={`${styles.podcastRegion} reveal reveal-delay-1`}>
                    <div className={styles.decorativeLeft}>
                        <img src="/static/img/star-sect5-izq.svg" alt="" />
                    </div>

                    <div className={styles.podcastContent}>
                        <div className={styles.videoContainer}>
                            <VideoConPlay
                                id="videoPlayerMuseo"
                                src="/static/video/Colombia Nativa.mp4"
                                claseVideo={styles.videoElement}
                            />
                        </div>
                        <div className={styles.podcastText}>
                            <h5>"Cantos y Cuentos del Vaupés" es una serie de podcast que explora la relación entre las aves y las culturas indígenas del Vaupés.</h5>
                        </div>
                    </div>
                </div>

                {/* Zona Inferior: Colección de Aves (Swiper) */}
                <div className={styles.collectionRegion}>
                    <div className={styles.decorLeftBottom}>
                        <svg viewBox="0 0 182.82 127.68" className={styles.svgDecor}>
                            <path fill="#d5f1d7" d="M83.78,15.17c9.13,3.89,18.53,8.61,27.94,14.14,47.9,28.17,77.64,66.46,66.42,85.53-9.01,15.33-41.73,13.57-79.1-2.33-9.13-3.88-18.54-8.62-27.94-14.14C23.2,70.2-6.53,31.9,4.68,12.83,13.7-2.49,46.41-.74,83.78,15.17Z" />
                        </svg>
                    </div>

                    <div className={styles.birdSwiperContainer}>
                        <button className={styles.swiperPrev} onClick={deslizador.anterior}>&#10094;</button>

                        <div className={styles.swiperTrackWrapper}>
                            <div
                                className={styles.swiperTrack}
                                style={{ transform: `translateX(-${deslizador.desplazamientoPorcentaje}%)` }}
                            >
                                {aves.map((ave) => (
                                    <div
                                        key={ave.src}
                                        className={styles.birdSlide}
                                        onClick={() => abrirModal(ave)}
                                    >
                                        <img src={ave.src} alt={ave.titulo} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className={styles.swiperNext} onClick={deslizador.siguiente}>&#10095;</button>
                    </div>

                    <div className={styles.spotifyLink}>
                        <a href="https://open.spotify.com/show/3XNk2BpPECiEQ7e1fE2I5E" target="_blank" rel="noopener noreferrer">
                            <img src="/static/redes_sociales/icono spoty.svg" alt="Spotify" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Modal de Ave Seleccionada */}
            <div
                className={`${styles['modal-sect5']} ${isModalOpen ? styles.active : ''}`}
                id="imageModal"
                onClick={cerrarModal}
            >
                <span className={styles['close-modal-sect5']} onClick={cerrarModal}>&times;</span>
                <div
                    className={`${styles['modal-content-sect5']} ${styles['carousel-sect5']}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.list}>
                        {aveSeleccionada && (
                            <div
                                className={`${styles.item} ${styles['animate-content']}`}
                                style={{ backgroundImage: `url(${aveSeleccionada.src})` }}
                            >
                                <div className={styles.content}>
                                    <div className={styles.title}>{aveSeleccionada.titulo}</div>
                                    <div className={styles.topic}>{aveSeleccionada.nombre}</div>
                                    <div className={styles.des}>{aveSeleccionada.descripcion}</div>
                                    <div className={styles.btn}>
                                        <button>
                                            <a href="https://repositorio.sena.edu.co/handle/11404/7547" target="_blank" rel="noreferrer">
                                                Saber más
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeccionMuseo;
