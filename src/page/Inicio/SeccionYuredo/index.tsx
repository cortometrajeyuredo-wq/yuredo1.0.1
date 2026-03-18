import styles from './SeccionYuredo.module.css';
import EstrellasFondo from '@/components/EstrellasFondo';
import VideoConPlay from '@/components/VideoConPlay';

const SeccionYuredo = () => {
    return (
        <section className={styles.section3} id="yuredo">
            <EstrellasFondo cantidad={40} leftMin={20} leftMax={90} className={styles.estrellasFondo} />

            <div className={styles.dianas}>
                <img src="/static/img/seccion3_yuredo/dianas3.svg" alt="" />
            </div>

            <div className={styles.contenedor_section3_1}>
                <div className={styles.estrellas3_1}>
                    <img src="/static/img/seccion3_yuredo/start-3_1.svg" alt="" />
                </div>
                <div className={styles.estrellas3_2}>
                    <img src="/static/img/seccion3_yuredo/start3_2.svg" alt="" />
                </div>
            </div>

            <div className={styles.contenedor_section3_2}>
                <div className={styles.centro}>
                    {/* videoWrapper es el ancla de posicionamiento para los decorativos */}
                    <div className={styles.videoWrapper}>
                        <img
                            className={styles.florCorner}
                            src="/static/img/seccion1_inicio/flor_amarilla.svg"
                            alt=""
                        />
                        <img
                            className={styles.colibriCorner}
                            src="/static/img/seccion3_yuredo/colibri-sect3.png"
                            alt=""
                        />
                        <div className={styles.videoYoutube}>
                            <VideoConPlay
                                id="videoPlayerYuredo"
                                src="/static/video/Teaser Yuredo 2024.mp4"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contenedor_section3_3}>
                <div className={styles.contenedor_logo_yuredo}>
                    <img className={styles.estrellas_izq} src="/static/img/seccion3_yuredo/start-sect3-bajo-izq.svg" alt="" />
                </div>
                <div className={styles.boton_saber_mas}>
                    <a href="https://youtube.com/@cortometrajeyuredo?si=_1ToUwIKw8ZSSfVf&cxqr=t4ylk6KvHXAMol17MkgXwQ" target="_blank" rel="noopener noreferrer">
                        <img src="/static/img/globales/btn-mas-svg.svg" alt="Saber más" />
                    </a>
                    <img className={styles.estrellas_der} src="/static/img/seccion3_yuredo/start-sect3-bajo-der.svg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default SeccionYuredo;
