import styles from './SeccionInicio.module.css';
import EstrellasFondo from '@/components/estrellas-fondo';
import VideoConPlay from '@/components/video-con-play';

const SeccionInicio = () => {

    return (
        <section className={styles.section1} id="inicio">
            <EstrellasFondo cantidad={80} className={styles.estrellasFondo} />
            <div className={styles.dianas}>
                <img src="/static/img/seccion-inicio/dianas.svg" alt="" />
            </div>
            <div className={styles.contenedor_section1_1}></div>
            <div className={styles.contenedor_section1_2}>
                <img src="/static/img/globales/logotipoYuredo.webp" alt="Logotipo Yuredo" />
            </div>
            <div className={styles.contenedor_section1_4}></div>
            <div className={styles.contenedor_section1_5}>
                <div className={styles.contenedor_izquierdo_sect1}></div>
                <div className={styles.contenedor_central_sect1}>
                    <div className={styles.teaserWrapper} id="teaser">
                        <VideoConPlay
                            src="/static/video/teaser-yuredo-2024.mp4"
                            textoAlternativo="Teaser Yuredo 2024"
                        />
                        <div className={styles.florSect1}>
                            <img src="/static/img/seccion-inicio/flower-amarilla.webp" alt="" />
                        </div>
                    </div>

                    <iframe
                        id="trailer"
                        src="https://www.youtube.com/embed/tI61JY201Xc?rel=0"
                        title="Trailer_Yuredo y el despertar de los Mimiwas"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className={styles.contenedor_derecho_sect1}>
                    <div className={styles.star_derecha}>
                        <img src="/static/img/seccion-inicio/star-sect-derecho.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.contenedor_section1_6}>
                <div className={styles.nebulosa}>
                    <img src="/static/img/seccion-inicio/nebulosa-inicio.svg" alt="" className={styles.nebulosa_img} />
                </div>
                <div className={styles.star}>
                    <img src="/static/img/seccion-inicio/star-sect-inicio-bajo.svg" alt="" />
                </div>
                <div className={styles.logoSena}>
                    <img src="/static/img/globales/logo-sena.webp" alt="SENA" />
                </div>
            </div>
        </section>
    );
};
export default SeccionInicio;
