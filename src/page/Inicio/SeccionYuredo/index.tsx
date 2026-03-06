/**
 * @módulo SeccionYuredo
 * @descripción Sección dedicada al proyecto transmedia Yuredo y su documental.
 * @arquitectura src/page/Inicio/SeccionYuredo/index.tsx
 */

import styles from './SeccionYuredo.module.css';
import EstrellasFondo from '@/components/EstrellasFondo';
import VideoConPlay from '@/components/VideoConPlay';

const SeccionYuredo = () => {
    return (
        <section className={styles.section3} id="yuredo">
            {/* Estrellas de fondo dinámicas */}
            <EstrellasFondo cantidad={40} leftMin={20} leftMax={90} className={styles.estrellasFondo} />

            {/* Decoración: dianas (pointer-events: none) */}
            <div className={styles.dianas}>
                <img src="/static/img/dianas3.svg" alt="" />
            </div>

            {/* Contenido Principal */}
            <div className={styles.mainContent}>

                {/* Zona Superior: Estrellas Decorativas */}
                <div className={`${styles.upperDecor} reveal`}>
                    <img src="/static/img/start-3_1.svg" className={styles.starTopLeft} alt="" />
                    <img src="/static/img/start3_2.svg" className={styles.starTopRight} alt="" />
                </div>

                {/* Zona Central: Video y Decoración Lateral */}
                <div className={styles.videoRegion}>
                    <div className={styles.decorLeft}>
                        <img src="/static/img/flor_amarilla.svg" alt="" />
                    </div>

                    <div className={styles.videoWrapper}>
                        <VideoConPlay
                            id="videoPlayerYuredo"
                            src="/static/video/Colombia Nativa.mp4"
                            claseVideo={styles.videoElement}
                        />
                    </div>

                    <div className={styles.decorRight}>
                        <img src="/static/img/colibri-sect3.png" alt="" />
                    </div>
                </div>

                {/* Zona Inferior: Botón y Estrellas */}
                <div className={styles.bottomControl}>
                    <div className={styles.starBottomLeft}>
                        <img src="/static/img/start-sect3-bajo-izq.svg" alt="" />
                    </div>

                    <div className={styles.btnContainer}>
                        <a
                            href="https://youtube.com/@cortometrajeyuredo?si=_1ToUwIKw8ZSSfVf&cxqr=t4ylk6KvHXAMol17MkgXwQ"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/static/img/btn-mas-svg.svg" alt="Saber más" />
                        </a>
                    </div>

                    <div className={styles.starBottomRight}>
                        <img src="/static/img/start-sect3-bajo-der.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeccionYuredo;
