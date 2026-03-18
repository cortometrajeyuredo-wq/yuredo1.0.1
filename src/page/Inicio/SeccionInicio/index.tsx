import styles from './SeccionInicio.module.css';
import EstrellasFondo from '@/components/EstrellasFondo';
import VideoConPlay from '@/components/VideoConPlay';

const SeccionInicio = () => {
    return (
        <section className={styles.section1} id="inicio">
            {/* Animación de estrellas generadas por JS */}
            <EstrellasFondo cantidad={80} className={styles.estrellasFondo} />

            {/* Decoración central de fondo (dianas) */}
            <div className={styles.dianas}>
                <img src="/static/img/seccion1_inicio/dianas.svg" alt="" />
            </div>

            <div className={styles.contenedor_section1_1}></div>

            <div className={styles.contenedor_section1_2}>
                <img src="/static/img/globales/logo-yuredo.webp" alt="Logo Yuredo" />
            </div>

            <div className={styles.contenedor_section1_3}>
                <h2>El despertar de los Mimiwas</h2>
            </div>

            <div className={styles.contenedor_section1_4}></div>

            <div className={styles.contenedor_section1_5}>
                <div className={styles.contenedor_izquierdo_sect1}></div>
                <div className={styles.contenedor_central_sect1}>
                    <VideoConPlay
                        id="videoPlayer"
                        src="/static/video/Trailer_Yuredo y el despertar de los Mimiwas.mp4"
                    />
                </div>
                <div className={styles.contenedor_derecho_sect1}>
                    <div className={styles.florSect1}>
                        <img src="/static/img/seccion1_inicio/flower-amarilla.png" alt="" />
                    </div>
                    <div className={styles.star_derecha}>
                        <img src="/static/img/seccion1_inicio/star-sect-derecho.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.contenedor_section1_6}>
                <div className={styles.nebulosa}>
                    <img src="/static/img/seccion1_inicio/nebulosaInicio.svg" alt="" className={styles.nebulosa_img} />
                </div>
                <div className={styles.star}>
                    <img src="/static/img/seccion1_inicio/star-sect1-bajo.svg" alt="" />
                </div>
                <div className={styles.logoSena}>
                    <img src="/static/img/globales/logo-sena.webp" alt="SENA" />
                </div>
            </div>
        </section>
    );
};

export default SeccionInicio;
