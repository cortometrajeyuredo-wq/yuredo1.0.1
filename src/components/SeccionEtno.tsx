import styles from './SeccionEtno.module.css';
import useSimpleSlider from '../hooks/useSimpleSlider';

// Textos del slider (portados de slider_sect4.js legacy)
const SLIDER_TEXTS = [
    `<strong style="color:#16142f;font-size:1.3vw;font-family:Noto+Sans;font-weight:700">Vaupés, entre plumajes, sonidos y colores V1</strong><br>
    <p style="color:#16142f;font-size:1.2vw;font-family:Noto+Sans;font-weight:300">La primera edición que da vida al proyecto. Aquí comienzan los relatos de las etnias y sus aves, un viaje a la raíz de la cultura indígena del Vaupés</p>
    <br><a style="color:#16142f;font-size:1.3vw;font-family:Noto+Sans;font-weight:300" href="https://repositorio.sena.edu.co/handle/11404/5387" target="_blank"> mas...</a>`,

    `<strong>Vaupés, entre plumajes, sonidos y colores V2</strong><br>
    <p style="color:#16142f;font-size:1vw">Con cada página, esta edición nos envuelve en las historias de las aves y los pueblos del Vaupés, un viaje donde tradición y naturaleza se entrelazan en perfecta armonía.</p>
    <br><a style="color:#16142f;font-size:1.2vw" href="https://repositorio.sena.edu.co/handle/11404/5706" target="_blank"> mas...</a>`,

    `<strong>Vaupés, entre plumajes,<br> sonidos y colores V3</strong><br>
   <p style="color:#16142f;font-size:1vw"> Plumajes que hablan, cantos que cuentan… En esta cartilla, las tradiciones indígenas nos guían en un viaje hacia la esencia del Vaupés y sus coloridas aves.</p>
    <br><a style="color:#16142f;font-size:1.2vw" href="https://repositorio.sena.edu.co/handle/11404/7547" target="_blank"> mas...</a>`,

    `<strong>Guía Fotográfica de Etnoaves</strong><br>
    <p style="color:#16142f;font-size:1.2vw">La Guía Fotográfica de Etnoaves es un tributo a la biodiversidad del Vaupés, donde cada ave tiene un nombre y una historia en lengua Pamikamú, conectando el pasado con el presente.</p>
    <br><a style="color:#16142f;font-size:1.2vw" href="https://repositorio.sena.edu.co/handle/11404/5755" target="_blank"> mas...</a>`
];

const SeccionEtno = () => {
    // 4 slides hardcoded in the HTML
    const { index, next, prev } = useSimpleSlider({ totalSlides: 4 });

    return (
        <section className={styles.section4} id="etno">
            {/* Background is CSS background-image on .section4 */}
            <div className={styles.dianas}>
                <img src="/static/img/dianas4.svg" alt="" />
            </div>

            {/* Contenido Principal (Flexbox Overlay) */}
            <div className={styles.mainContent}>

                {/* Cabecera: Decoración y Título */}
                <div className={styles.headerRegion}>
                    <img src="/static/img/start-sect4-arriba.svg" className={styles.topDecor} alt="" />
                    <div className={styles.titleWrapper}>
                        <h3>Etno-ornitologia</h3>
                    </div>
                </div>

                {/* Contenido Central: 3 Columnas (Info, Slider, Texto Dinámico) */}
                <div className={styles.contentGrid}>

                    {/* Columna Izquierda: Descargas e Intro */}
                    <div className={styles.leftColumn}>
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

                    {/* Columna Central: Slider */}
                    <div className={styles.centerColumn}>
                        <div className={styles.sliderWrapper}>
                            <div
                                className={styles.sliderTrack}
                                style={{
                                    transform: `translateX(-${index * 100}%)`,
                                }}
                            >
                                <div className={styles.slide}><img src="/static/imgTodas/Etno_Ornitologia_02.jpg" alt="Slide 1" /></div>
                                <div className={styles.slide}><img src="/static/imgTodas/Etno_Ornitologia_03.jpg" alt="Slide 2" /></div>
                                <div className={styles.slide}><img src="/static/imgTodas/Etno_Ornitologia_01.jpg" alt="Slide 3" /></div>
                                <div className={styles.slide}><img src="/static/imgTodas/Etno_Ornitologia_04.jpg" alt="Slide 4" /></div>
                            </div>

                            <button className={styles.prevBtn} onClick={prev}>&#10094;</button>
                            <button className={styles.nextBtn} onClick={next}>&#10095;</button>
                        </div>
                        <img src="/static/img/start4.svg" className={styles.starSlider} alt="" />
                    </div>

                    {/* Columna Derecha: Texto Dinámico */}
                    <div className={styles.rightColumn}>
                        <div className={styles.dynamicText}>
                            <h5 dangerouslySetInnerHTML={{ __html: SLIDER_TEXTS[index] }} />
                        </div>
                        <img src="/static/img/start4_2.svg" className={styles.starRight} alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SeccionEtno;

