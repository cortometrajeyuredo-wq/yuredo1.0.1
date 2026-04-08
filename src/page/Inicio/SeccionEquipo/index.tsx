import styles from './SeccionEquipo.module.css';
import useDeslizadorSimple from '@/hooks/useDeslizadorSimple';
import { equipoYuredo } from '@/data/equipo';
import EstrellasFondo from '@/components/EstrellasFondo';

const SeccionEquipo = () => {
    const { indice: indiceActivo, siguiente, anterior } = useDeslizadorSimple({
        totalDiapositivas: equipoYuredo.length,
        diapositivasVisibles: 1,
        bucle: true,
    });

    return (
        <section className={styles.section6} id="equipo">
            <EstrellasFondo cantidad={50} className={styles.estrellasFondo} />

            <div className={styles.dianas}>
                <img src="/static/img/seccion6_equipo/dianas6.svg" alt="" />
            </div>

            <div className={styles.palmaAbajo}>
                <img src="/static/img/seccion6_equipo/palmaResponsiveAbajo.svg" alt="" />
            </div>

            <div className={styles.palmaIzquierda}>
                <img src="/static/img/seccion6_equipo/palmaResponsiveIzquierda.svg" alt="" />
            </div>

            <div className={styles.starTopMobile}>
                <img src="/static/img/seccion6_equipo/star-sect6-ariba.svg" alt="" />
            </div>

            <div className={styles.starBottomMobile}>
                <img src="/static/img/seccion6_equipo/star-sect6-bajo-izd.svg" alt="" />
            </div>

            <div className={styles.starTopRightMobile}>
                <img src="/static/img/seccion6_equipo/star-sect6-arriba-der.svg" alt="" />
            </div>

            <div className={styles.contenedor_section6_1}>
            </div>

            <div className={styles.contenedor_section6_2}>
                <button className={styles.prevSect6} onClick={anterior}>&#10094;</button>

                <div className={styles.izquierdo}>
                    <div className={styles.start_sect6}>
                        <img src="/static/img/seccion6_equipo/star-sect6-bajo-izd.svg" alt="" />
                    </div>
                </div>

                <div className={styles.contenedor_slider}>
                    <div className={styles.slider}>
                        {equipoYuredo.map((miembro, idx) => {
                            const total = equipoYuredo.length;
                            
                            // Calcular distancia del elemento activo
                            let diff = idx - indiceActivo;
                            
                            if (diff > total / 2) diff -= total;
                            else if (diff < -total / 2) diff += total;

                            let clasesPosicion = styles.hiddenRight;
                            if (diff === 0) clasesPosicion = styles.active;
                            else if (diff === 1) clasesPosicion = styles.next;
                            else if (diff === -1) clasesPosicion = styles.prev;
                            else if (diff < -1) clasesPosicion = styles.hiddenLeft;

                            return (
                                <div key={miembro.id} className={`${styles.slider_item} ${clasesPosicion}`}>
                                    <div className={styles.slider_img}>
                                        <img src={`/static/avatares/${miembro.avatar}`} alt={miembro.nombre} />
                                    </div>
                                    <div className={styles.text_slider_img}>
                                        <strong>{miembro.nombre}</strong>
                                        <p>{miembro.rol}</p>
                                        <span style={{ fontSize: '0.9vw', color: 'var(--azulMedio, #236476)', fontWeight: 800 }}>Portafolio</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.titulo_sect6}>
                        <h3>Equipo</h3>
                    </div>
                </div>

                <div className={styles.derecho}>
                    <div className={styles.start_derecho_sect6}>
                        <img src="/static/img/seccion6_equipo/star1.svg" alt="" />
                    </div>
                    <div className={styles.vacio_derecho_sect6}></div>
                </div>

                <button className={styles.nextSect6} onClick={siguiente}>&#10095;</button>
            </div>
        </section>
    );
};

export default SeccionEquipo;
