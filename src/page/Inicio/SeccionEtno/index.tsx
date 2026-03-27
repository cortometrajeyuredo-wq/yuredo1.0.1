import styles from './SeccionEtno.module.css';
import useDeslizadorSimple from '@/hooks/useDeslizadorSimple';
import { cartillasEtno } from '@/data/etno';
import EstrellasFondo from '@/components/EstrellasFondo';

const SeccionEtno = () => {
    const { indice: indiceActivo, siguiente, anterior } = useDeslizadorSimple({
        totalDiapositivas: cartillasEtno.length,
    });

    const cartillaActiva = cartillasEtno[indiceActivo];

    const imagenesSlider = [
        '/static/imgTodas/Etno_Ornitologia_02.jpg',
        '/static/imgTodas/Etno_Ornitologia_03.jpg',
        '/static/imgTodas/Etno_Ornitologia_01.jpg',
        '/static/imgTodas/Etno_Ornitologia_04.jpg',
    ];

    return (
        <section className={styles.section4} id="etno">
            <EstrellasFondo cantidad={40} leftMin={20} leftMax={90} className={styles.estrellasFondo} />

            {/* Estrellas en las esquinas */}
            <img src="/static/img/seccion4_etno/starSect4SupIzq.svg" className={styles.starSupIzq} alt="" />
            <img src="/static/img/seccion4_etno/starSect4SupDer.svg" className={styles.starSupDer} alt="" />
            <img src="/static/img/seccion4_etno/starSect4InfIzq.svg" className={styles.starInfIzq} alt="" />
            <img src="/static/img/seccion4_etno/starSect4InfDer.svg" className={styles.starInfDer} alt="" />

            <div className={styles.dianas}>
                <img 
                    src="/static/img/seccion4_etno/dianas4.svg" 
                    className={styles.dianas_desktop} 
                    alt="" 
                />
                <img 
                    src="/static/img/seccion4_etno/aveResponsiveSec4Izq.svg" 
                    className={styles.ave_mobile} 
                    alt="Ave decorativa" 
                />
                <img 
                    src="/static/img/seccion4_etno/lianaResponsiveSec4.svg" 
                    className={styles.liana_mobile} 
                    alt="Liana decorativa" 
                />
            </div>

            <div className={styles.contenedor_section4_1}>
                <div className={styles.start_sect4_arriba}>
                    <img src="/static/img/seccion4_etno/start-sect4-arriba.svg" alt="" />
                </div>
                <div className={styles.start_sect4_arriba}>
                    <img src="/static/img/seccion4_etno/start-sect4-arriba.svg" alt="" />
                </div>
            </div>

            <div className={styles.contenedor_section4_2}>
              {  <div className={styles.yuredo_logo_black}>
                    {/* Placeholder para yuredo-logo-black.png si fuera necesario */}
                </div>}
                <div className={styles.titulo_sect4}>
                    <h3>Etno-ornitologia</h3>
                </div>
            </div>

            <div className={styles.contenedor_section4_3}>
                <div className={styles.uno}>
                    <div className={styles.uno1}>
                        <a href="https://yuredo.com/Cartillas%20Etno.zip" target="_blank" rel="noopener noreferrer">
                            <img src="/static/img/globales/btn-mas-svg.svg" alt="Descarga" />
                        </a>
                        <h5>Descarga los libros aquí...</h5>
                    </div>
                    <div className={styles.uno2}></div>
                </div>

                <div className={styles.dos}>
                    <div className={styles.dos1}></div>
                    <div className={styles.dos2}></div>
                    <div className={styles.dos3}>
                        <div className={styles.texto}>
                            <h5>
                                <b>Etno-Ornitología</b> <br />
                                La Etno-Ornitología conecta el saber indígena con la investigación científica. En el
                                Vaupés, las aves no son solo fauna, sino parte esencial de la vida cultural y
                                espiritual. Nuestro trabajo recupera este conocimiento y lo documenta, generando
                                productos como guías, protocolos y eventos para su difusión.
                            </h5>
                        </div>
                    </div>
                    <div className={styles.dos4}>
                        <img src="/static/img/seccion4_etno/star4_1.svg" alt="" />
                    </div>
                </div>

                <div className={styles.sect4_tres}>
                    <div className={styles.sect4_tres_slider}>
                        <div
                            className={styles.sliderTrack}
                            style={{
                                display: 'flex',
                                transition: 'transform 0.4s ease',
                                transform: `translateX(-${indiceActivo * (100 / imagenesSlider.length)}%)`,
                                width: `${imagenesSlider.length * 100}%`,
                                height: '100%'
                            }}
                        >
                            {imagenesSlider.map((src, idx) => (
                                <div key={idx} className={styles.sect4_slide} style={{ width: `${100 / imagenesSlider.length}%` }}>
                                    <div className={styles.sect4_item}>
                                        <img src={src} alt={`Slide ${idx + 1}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.star_sect4_centro}>
                        <img src="/static/img/seccion4_etno/start4.svg" alt="" />
                    </div>
                    <button className={styles.sect4_prev} onClick={anterior}>&#10094;</button>
                    <button className={styles.sect4_next} onClick={siguiente}>&#10095;</button>
                </div>

                <div className={styles.cuatro}>
                    <div className={styles.sect4_txt}>
                        <h5>
                            <b>{cartillaActiva.titulo}:</b> {cartillaActiva.descripcion}{' '}
                            <a href={cartillaActiva.enlace} target="_blank" rel="noopener noreferrer" className={styles.enlaceMas}>
                                Más....
                            </a>
                        </h5>
                    </div>
                    {/* Contenido para móvil: solo enlace que actúa como título */}
                    <div className={styles.sect4_txt_mobile}>
                        <a href={cartillaActiva.enlace} target="_blank" rel="noopener noreferrer" className={styles.enlaceTitulo}>
                            {cartillaActiva.titulo}
                        </a>
                    </div>
                    <div className={styles.estrellas}>
                        <img src="/static/img/seccion4_etno/start4_2.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeccionEtno;
