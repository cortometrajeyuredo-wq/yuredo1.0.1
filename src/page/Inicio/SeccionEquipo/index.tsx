import styles from './SeccionEquipo.module.css';
import useDeslizadorSimple from '@/hooks/useDeslizadorSimple';
import { equipoYuredo } from '@/data/equipo';

/**
 * @módulo SeccionEquipo
 * @descripción Presentación de los integrantes del equipo Yuredo mediante un slider 3D
 * que destaca al miembro central y desplaza lateralmente a los demás.
 * @arquitectura src/page/Inicio/SeccionEquipo/index.tsx
 */

const SeccionEquipo = () => {
    // --- Lógica del Slider 3D ---

    // El deslizador usa un índice central para determinar quién está en foco.
    const { indice: indiceActivo, siguiente, anterior } = useDeslizadorSimple({
        totalDiapositivas: equipoYuredo.length,
        diapositivasVisibles: 1,
        bucle: true,
    });

    return (
        <section className={styles.section6} id="equipo">
            {/* Fondo decorativo */}
            <img className={styles.bgImage} src="/static/img/fondo6.png" alt="" />
            <div className={styles.dianas}>
                <img src="/static/img/dianas6.svg" alt="" />
            </div>

            {/* Contenido Principal */}
            <div className={styles.mainContent}>

                {/* Zona Superior: Título y Decoración */}
                <div className={styles.titleRegion}>
                    <img className={styles.starTop} src="/static/img/star-sect6-ariba.svg" alt="" />
                    <div className={styles.titleWrapper}>
                        <h3>Equipo</h3>
                    </div>
                </div>

                {/* Zona Central: Slider 3D del equipo */}
                <div className={styles.sliderRegion}>

                    {/* Lateral Izquierdo */}
                    <div className={styles.decorLeft}>
                        <div className={styles.logoWrapper}>
                            <img src="/static/img/logo-yuredo.webp" alt="Yuredo Logo" />
                        </div>
                        <img className={styles.starLeft} src="/static/img/star-sect6-bajo-izd.svg" alt="" />
                    </div>

                    {/* Central: Slider 3D */}
                    <div className={styles.sliderCentral}>
                        <button className={styles.navPrev} onClick={anterior}>&#10094;</button>

                        <div className={styles.sliderTrack3D}>
                            {equipoYuredo.map((miembro, idx) => {
                                const total = equipoYuredo.length;
                                const idxAnterior = (indiceActivo - 1 + total) % total;
                                const idxSiguiente = (indiceActivo + 1) % total;

                                let clasesPosicion = styles.hidden;
                                if (idx === indiceActivo) clasesPosicion = styles.active;
                                else if (idx === idxAnterior) clasesPosicion = styles.prev;
                                else if (idx === idxSiguiente) clasesPosicion = styles.next;

                                return (
                                    <div key={miembro.id} className={`${styles.sliderItem} ${clasesPosicion}`}>
                                        <div className={styles.memberImg}>
                                            <img src={`/static/avatares/${miembro.avatar}`} alt={miembro.nombre} />
                                        </div>
                                        <div className={styles.memberInfo}>
                                            <strong>{miembro.nombre}</strong>
                                            <p>{miembro.rol}</p>
                                            <a href="#">Portafolio</a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button className={styles.navNext} onClick={siguiente}>&#10095;</button>
                    </div>

                    {/* Lateral Derecho */}
                    <div className={styles.decorRight}>
                        <img className={styles.starRight} src="/static/img/star1.svg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SeccionEquipo;
