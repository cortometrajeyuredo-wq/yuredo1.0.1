import { useState, useEffect, useCallback } from 'react';
import styles from './SeccionMuseo.module.css';
import useSimpleSlider from '../hooks/useSimpleSlider';
import useScrollLock from '../hooks/useScrollLock';

const BIRD_DATA = [
    {
        src: '/static/img/MotMot_Aves_01.png',
        title: 'Chelidoptera Tenebrosa',
        name: 'Guardiana de las Sombras',
        des: 'Con su plumaje oscuro y su vuelo sigiloso, la Chelidoptera tenebrosa surca los rincones más sombríos del Vaupés. En cada avistamiento, esta ave nos recuerda la magia escondida en la penumbra de la selva'
    },
    {
        src: '/static/img/MotMot_Aves_02.png',
        title: 'Galbula Leucogastra',
        name: 'Flecha de Esmeralda',
        des: 'Brillante y elegante, la Galbula leucogastra atraviesa los cielos con destellos verdes y blancos, como una flecha esmeralda en movimiento. Sus colores capturan la luz de la selva, trayendo vida a cada rincón que toca.'
    },
    {
        src: '/static/img/MotMot_Aves_03.png',
        title: 'Jacamerops Aureus',
        name: 'Destello Dorado de la Selva',
        des: 'La Jacamerops aureus, con su plumaje dorado, ilumina su entorno como un rayo de sol en la sombra. Su canto profundo resuena en la selva, como un eco antiguo que conecta la tierra y el cielo.'
    },
    {
        src: '/static/img/MotMot_Aves_04.png',
        title: 'Nonnula Rubecula',
        name: 'Eco de los Arbustos',
        des: 'Pequeña y discreta, la Nonnula rubecula se mueve entre los arbustos como un eco suave. Su presencia tranquila nos enseña a valorar la belleza en los detalles más sutiles y silenciosos de la naturaleza.'
    },
    {
        src: '/static/img/MotMot_Aves_05.png',
        title: 'Monasa Nigrifrons',
        name: 'Centinela del Atardecer',
        des: 'Con su pico imponente y su mirada atenta, la Monasa nigrifrons observa la selva desde las alturas. Al atardecer, su silueta se convierte en el guardián de la luz que se desvanece.'
    },
    {
        src: '/static/img/MotMot_Aves_06.png',
        title: 'Phaethornis Superciliosus',
        name: 'Viajero de las Flores',
        des: 'Veloz y delicado, el Phaethornis superciliosus danza entre las flores buscando el néctar de la vida. Su vuelo incansable es un tributo a la energía y vitalidad de la selva del Vaupés.'
    },
    {
        src: '/static/img/MotMot_Aves_07.png',
        title: 'Florisuga Mellivora',
        name: 'Joyel de los Aires',
        des: 'El Florisuga mellivora resplandece como una joya en el aire. Sus colores vibrantes y su agilidad lo convierten en uno de los espectáculos más hermosos de nuestra rica biodiversidad.'
    },
    {
        src: '/static/img/MotMot_Aves_08.png',
        title: 'Polytmus Guainumbi',
        name: 'Relámpago de los Humedales',
        des: 'Encontrado cerca de las aguas, el Polytmus guainumbi brilla como un relámpago verde. Su conexión con los humedales nos recuerda la importancia del agua para toda la vida en el Vaupés.'
    },
    {
        src: '/static/img/MotMot_Aves_09.png',
        title: 'Topaza Pella',
        name: 'Rey de los Colibríes',
        des: 'Majestuoso y único, el Topaza pella es el rey de los cielos del Vaupés. Sus plumas iridiscentes y su cola larga son símbolos de la exuberancia y majestuosidad de nuestra tierra.'
    },
    {
        src: '/static/img/MotMot_Aves_10.png',
        title: 'Chlorostilbon Mellisugus',
        name: 'Esmeralda de los Jardines',
        des: 'Pequeño pero vibrante, el Chlorostilbon mellisugus es la esmeralda que adorna nuestros jardines. Su presencia constante es un recordatorio de que la naturaleza siempre está cerca de nosotros.'
    },
    {
        src: '/static/img/MotMot_Aves_11.png',
        title: 'Thalurania Furcata',
        name: 'Príncipe de la Selva',
        des: 'Con su corona de colores y su porte elegante, la Thalurania furcata es el príncipe de la selva profunda. En cada rincón donde vuela, deja una estela de misterio y belleza.'
    }
];

const SeccionMuseo = () => {
    // --- Estado del Modal ---
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBird, setSelectedBird] = useState<typeof BIRD_DATA[0] | null>(null);

    // --- Slider de Podcast (Removed as it is single video now) ---
    // const podcastSlider = useSimpleSlider({ totalSlides: 1, visibleSlides: 1 });

    // --- Swiper de imágenes ---
    const swiper = useSimpleSlider({ totalSlides: BIRD_DATA.length, visibleSlides: 4 });

    useScrollLock(isModalOpen);

    // --- Abrir / Cerrar Modal ---
    const openModal = useCallback((bird: typeof BIRD_DATA[0]) => {
        setSelectedBird(bird);
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedBird(null);
    }, []);

    // --- Cerrar con tecla ESC ---
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, closeModal]);

    return (
        <section className={styles.section5} id="museo">
            {/* Background is now CSS background-image on .section5 */}
            <div className={styles.dianas}>
                <img src="/static/img/dianas5.png" alt="" />
            </div>

            {/* Contenido Principal (Flexbox Overlay) */}
            <div className={styles.mainContent}>

                {/* Zona Superior: Logo y Título */}
                <div className={styles.topRegion}>
                    <div className={styles.logoWrapper}>
                        <img src="/static/img/yuredo-white.png" alt="Yuredo" />
                    </div>
                    <div className={styles.titleWrapper}>
                        <h2>Podcast Aves Vaupés</h2>
                        <img className={styles.starTop} src="/static/img/star-sect5-arriba.svg" alt="" />
                    </div>
                </div>

                {/* Zona Media: Podcast (Video + Texto) */}
                <div className={styles.podcastRegion}>
                    <div className={styles.decorativeLeft}>
                        <img src="/static/img/star-sect5-izq.svg" alt="" />
                    </div>

                    <div className={styles.podcastContent}>
                        <div className={styles.videoContainer}>
                            <video
                                id="videoPlayerMuseo"
                                preload="auto"
                                controls
                                className={styles.videoElement}
                            >
                                <source src="/static/video/Colombia Nativa.mp4" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>
                        <div className={styles.podcastText}>
                            <h5>"Cantos y Cuentos del Vaupés" es una serie de podcast que explora la relación entre las aves y las culturas indígenas del Vaupés.</h5>
                        </div>
                    </div>
                </div>

                {/* Zona Inferior: Colección (Swiper Aves) */}
                <div className={styles.collectionRegion}>
                    <div className={styles.decorLeftBottom}>
                        <svg viewBox="0 0 182.82 127.68" className={styles.svgDecor}>
                            {/* ... SVG Content shortened for brevity, assumes CSS handles path/fill ... */}
                            <path fill="#d5f1d7" d="M83.78,15.17c9.13,3.89,18.53,8.61,27.94,14.14,47.9,28.17,77.64,66.46,66.42,85.53-9.01,15.33-41.73,13.57-79.1-2.33-9.13-3.88-18.54-8.62-27.94-14.14C23.2,70.2-6.53,31.9,4.68,12.83,13.7-2.49,46.41-.74,83.78,15.17Z" />
                        </svg>
                    </div>

                    <div className={styles.birdSwiperContainer}>
                        <button className={styles.swiperPrev} onClick={swiper.prev}>&#10094;</button>

                        <div className={styles.swiperTrackWrapper}>
                            <div
                                className={styles.swiperTrack}
                                style={{
                                    transform: `translateX(-${swiper.offsetPorcentaje}%)`,
                                }}
                            >
                                {BIRD_DATA.map((bird) => (
                                    <div
                                        key={bird.src}
                                        className={styles.birdSlide}
                                        onClick={() => openModal(bird)}
                                    >
                                        <img src={bird.src} alt={bird.title} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className={styles.swiperNext} onClick={swiper.next}>&#10095;</button>
                    </div>

                    <div className={styles.spotifyLink}>
                        <a href="https://open.spotify.com/show/3XNk2BpPECiEQ7e1fE2I5E" target="_blank" rel="noopener noreferrer">
                            <img src="/static/redes_sociales/icono spoty.svg" alt="Spotify" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Modal de Museo 1:1 Restoration */}
            <div
                className={`${styles['modal-sect5']} ${isModalOpen ? styles.active : ''}`}
                id="imageModal"
                onClick={closeModal}
            >
                <span className={styles['close-modal-sect5']} onClick={closeModal}>&times;</span>
                <div
                    className={`${styles['modal-content-sect5']} ${styles['carousel-sect5']}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.list}>
                        {selectedBird && (
                            <div className={`${styles.item} ${styles['animate-content']}`} style={{ backgroundImage: `url(${selectedBird.src})` }}>
                                <div className={styles.content}>
                                    <div className={styles.title}>{selectedBird.title}</div>
                                    <div className={styles.topic}>{selectedBird.name}</div>
                                    <div className={styles.des}>{selectedBird.des}</div>
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
