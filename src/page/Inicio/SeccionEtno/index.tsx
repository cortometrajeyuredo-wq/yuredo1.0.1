import styles from './SeccionEtno.module.css';
import useDeslizadorSimple from '@/hooks/useDeslizadorSimple';
import { cartillasEtno } from '@/data/etno';
import EstrellasFondo from '@/components/EstrellasFondo';

/**
 * @módulo SeccionEtno
 * @descripción Módulo de Etno-Ornitología. Renderiza dinámicamente información de cartillas 
 * utilizando datos tipados y evita el uso de dangerouslySetInnerHTML.
 * @arquitectura src/page/Inicio/SeccionEtno/index.tsx
 */

const SeccionEtno = () => {
    // --- Lógica de Componente ---

    // El deslizador gestiona la visibilidad de las imágenes representativas y el texto de las cartillas.
    const { indice: indiceActivo, siguiente, anterior } = useDeslizadorSimple({
        totalDiapositivas: cartillasEtno.length,
    });

    const cartillaActiva = cartillasEtno[indiceActivo];

    // Imágenes del slider de cartillas (una por cartilla)
    const imagenesSlider = [
        '/static/imgTodas/Etno_Ornitologia_02.jpg',
        '/static/imgTodas/Etno_Ornitologia_03.jpg',
        '/static/imgTodas/Etno_Ornitologia_01.jpg',
        '/static/imgTodas/Etno_Ornitologia_04.jpg',
    ];

    return (
        <section className={styles.section4} id="etno">
            {/* Estrellas dinámicas de fondo */}
            <EstrellasFondo cantidad={40} leftMin={20} leftMax={90} className={styles.estrellasFondo} />

            {/* Fondo via CSS background-image en .section4 */}
            <div className={styles.dianas}>
                <img src="/static/img/dianas4.svg" alt="" />
            </div>

            {/* Contenido Principal */}
            <div className={styles.mainContent}>

                {/* Cabecera: Decoración y Título */}
                <div className={`${styles.headerRegion} reveal`}>
                    <img src="/static/img/start-sect4-arriba.svg" className={styles.topDecor} alt="" />
                    <div className={styles.titleWrapper}>
                        <h3>Etno-ornitologia</h3>
                    </div>
                </div>

                {/* Contenido Central: 3 Columnas */}
                <div className={styles.contentGrid}>

                    {/* Columna Izquierda: Descargas e Intro */}
                    <div className={`${styles.leftColumn} reveal-left`}>
                        <div className={styles.downloadSection}>
                            <a href="https://yuredo.com/Cartillas%20Etno.zip" target="_blank" rel="noopener noreferrer">
                                <img src="/static/img/btn-mas-svg.svg" alt="Descargar" />
                                <h5>descarga los libros aqui.</h5>
                            </a>
                        </div>
                        <div className={styles.introSection}>
                            <h5>
                                <b>Etno-Ornitología</b> <br />
                                La Etno-Ornitología conecta el saber indígena con la investigación científica. En el
                                Vaupés, las aves no son solo fauna, sino parte esencial de la vida cultural y
                                espiritual.
                            </h5>
                        </div>
                        <img src="/static/img/star4_1.svg" className={styles.starLeft} alt="" />
                    </div>

                    {/* Columna Central: Slider de imágenes */}
                    <div className={styles.centerColumn}>
                        <div className={styles.sliderWrapper}>
                            <div
                                className={styles.sliderTrack}
                                style={{ transform: `translateX(-${indiceActivo * 100}%)` }}
                            >
                                {imagenesSlider.map((src, idx) => (
                                    <div key={idx} className={styles.slide}>
                                        <img src={src} alt={`Slide ${idx + 1}`} />
                                    </div>
                                ))}
                            </div>

                            <button className={styles.prevBtn} onClick={anterior}>&#10094;</button>
                            <button className={styles.nextBtn} onClick={siguiente}>&#10095;</button>
                        </div>
                        <img src="/static/img/start4.svg" className={styles.starSlider} alt="" />
                    </div>

                    {/* Columna Derecha: Texto dinámico tipado (sin dangerouslySetInnerHTML) */}
                    <div className={styles.rightColumn}>
                        <div className={styles.dynamicText}>
                            <h5 className={styles.cartillaTitle}>{cartillaActiva.titulo}</h5>
                            <p className={styles.cartillaDescription}>{cartillaActiva.descripcion}</p>
                            <a className={styles.cartillaLink} href={cartillaActiva.enlace} target="_blank" rel="noopener noreferrer">
                                más...
                            </a>
                        </div>
                        <img src="/static/img/start4_2.svg" className={styles.starRight} alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SeccionEtno;
