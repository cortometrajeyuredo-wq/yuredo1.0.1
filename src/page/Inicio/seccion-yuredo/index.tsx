import styles from './SeccionYuredo.module.css';
import EstrellasFondo from '@/components/estrellas-fondo';
const SeccionYuredo = () => {
    return (
        <section className={styles.section3} id="yuredo">
            <EstrellasFondo cantidad={40} leftMin={20} leftMax={90} className={styles.estrellasFondo} />
            <div className={styles.dianas}>
                <img src="/static/img/seccion-yuredo/dianas-yuredo.svg" alt="" />
            </div>
            <div className={styles.lianasResponsivo}>
                <img src="/static/img/seccion-yuredo/lianas-sec-yuredo.svg" alt="Lianas decorativas" />
            </div>
            <div className={styles.contenedor_section3_1}>
                <div className={styles.estrellas3_1}>
                    <img src="/static/img/seccion-yuredo/start-yuredo-1.svg" alt="" />
                </div>
                <div className={styles.estrellas3_2}>
                    <img src="/static/img/seccion-yuredo/start-yuredo-2.svg" alt="" />
                </div>
            </div>
            <div className={styles.contenedor_titulo}>
                <img src="/static/img/globales/logotipoYuredo.webp" alt="Título Yuredo" />
            </div>
            <div className={styles.contenedor_section3_2}>
                <div className={styles.centro}>
                    <div className={styles.videoWrapper}>
                        <img
                            className={styles.florCorner}
                            src="/static/img/seccion-yuredo/flor-amarilla.svg"
                            alt=""
                        />
                        <img
                            className={styles.colibriCorner}
                            src="/static/img/seccion-yuredo/colibri-sect-yuredo.webp"
                            alt=""
                        />
                        <div className={styles.videoYoutube}>
                            <iframe
                                src="https://www.youtube.com/embed/lhQnR2HUOKQ?rel=0"
                                title="Teaser Yuredo 2024"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className={styles.palmeraResponsivo}>
                    <img src="/static/img/seccion-yuredo/palmera-sec-yuredo.svg" alt="Palmera decorativa" />
                </div>
            </div>
            <div className={styles.contenedor_section3_3}>
                <div className={styles.contenedor_logo_yuredo}>
                    <img className={styles.estrellas_izq} src="/static/img/seccion-yuredo/start-sect-yuredo-bajo-izq.svg" alt="" />
                </div>
                <div className={styles.boton_saber_mas}>
                    <a href="https://youtube.com/@cortometrajeyuredo?si=_1ToUwIKw8ZSSfVf&cxqr=t4ylk6KvHXAMol17MkgXwQ" target="_blank" rel="noopener noreferrer">
                        <img src="/static/img/globales/btn-mas-svg.svg" alt="Saber más" />
                    </a>
                    <img className={styles.estrellas_der} src="/static/img/seccion-yuredo/start-sect-yuredo-bajo-der.svg" alt="" />
                </div>
            </div>
        </section>
    );
};
export default SeccionYuredo;
