import styles from './SeccionEquipo.module.css';
import useSimpleSlider from '../hooks/useSimpleSlider';

const TEAM_MEMBERS = [
    { name: 'Gloria Rivera', role: 'Investigadora líder de Enfoque Étnico', avatar: 'sra gloria.svg', id: 'gloria' },
    { name: 'Leonardo Huertas Bernal', role: 'Director', avatar: 'profe leonardo bernal.svg', id: 'leonardo' },
    { name: 'Luis Enrique Salcedo', role: 'Technical Director 3d', avatar: 'profe luis salcedo.svg', id: 'luis' },
    { name: 'Luis Enrrique Llanos', role: 'Sabedor Tradicional Pamiwa', avatar: 'luis enrique llanos.svg', id: 'enrique' },
    { name: 'Ivonne Espindola', role: 'VFX y Animación', avatar: 'profe ivonne espindola.svg', id: 'ivonne' },
    { name: 'Fabián Rodriguez', role: 'Traductor de lengua Pamie', avatar: 'fabian rodriguez traductor.svg', id: 'fabian' },
    { name: 'Yenifer Lopez', role: 'Investigador Junior', avatar: 'yenifer lopez.svg', id: 'yenifer' },
    { name: 'Angelica Beltran', role: 'Animador 3D', avatar: 'angelica beltran.svg', id: 'angelica' },
    { name: 'Cristina Arce Nieto', role: 'Animador 3D', avatar: 'cristina arce.svg', id: 'cristina' },
    { name: 'Daniel Felipe Galindo', role: 'Animador 3D', avatar: 'daniel galindo.svg', id: 'daniel-f' },
    { name: 'Daniel Ricardo Ocampo', role: 'Animador 3D y Artista Conceptual', avatar: 'daniel ocampo.svg', id: 'daniel-r' },
    { name: 'Felipe Cortez', role: 'Dinamizador SENNOVA Vaupés', avatar: 'edgar felipe co.svg', id: 'felipe' },
    { name: 'Jhon Gerardo Plazas', role: 'Desarrollador Web, Multimedia y Software', avatar: 'jhon gerardo.svg', id: 'jhonge' },
    { name: 'Iohann Vargas', role: 'Animador 3D', avatar: 'iohann vargas.svg', id: 'iohann' },
    { name: 'Jorge Luis Bolaños', role: 'Diseño visual Publicidad y Marketing', avatar: 'jorge bolaños.svg', id: 'jorge' },
    { name: 'Leiner Barros Agamez', role: 'Diserrollo Publicitario y Sonoro', avatar: 'leiner barros.svg', id: 'leiner' },
    { name: 'Luisa Fernanda Rodriguez', role: 'Animador 3D', avatar: 'luisa rodriguez.svg', id: 'luisa' },
    { name: 'Nicolas Andrés Ramirez', role: 'Animador 3D', avatar: 'nicolas ramirez.svg', id: 'nicolas' },
    { name: 'Nubia Esperanza Bonilla', role: 'Diserrollo Publicitario', avatar: 'nubia bocanegra.svg', id: 'nubia' },
    { name: 'Sharyk Sofia Gómez', role: 'Desarrolladora Web y Multimedia', avatar: 'sharick.svg', id: 'sharyk' },
    { name: 'Sara Lucia Acosta', role: 'Diseño Gráfico y Asistente de producción', avatar: 'sara acosta.svg', id: 'sara' },
    { name: 'Sebastian Guerrero', role: 'Biólogo', avatar: 'sebastian guerrero.svg', id: 'sebastian' }
];

const SeccionEquipo = () => {
    const { index: activeIndex, next, prev } = useSimpleSlider({
        totalSlides: TEAM_MEMBERS.length,
        visibleSlides: 1, // Controlado por lógica 3D personalizada
        loop: true
    });

    return (
        <section className={styles.section6} id="equipo">
            {/* Background Image (Absolute) */}
            <img className={styles.bgImage} src="/static/img/fondo6.png" alt="" />
            <div className={styles.dianas}>
                <img src="/static/img/dianas6.svg" alt="" />
            </div>

            {/* Contenido Principal (Flexbox Overlay) */}
            <div className={styles.mainContent}>

                {/* Zona Superior: Título y Decoración */}
                <div className={styles.titleRegion}>
                    <img className={styles.starTop} src="/static/img/star-sect6-ariba.svg" alt="" />
                    <div className={styles.titleWrapper}>
                        <h3>Equipo</h3>
                    </div>
                </div>

                {/* Zona Central: Slider y Decoraciones Laterales */}
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
                        <button className={styles.navPrev} onClick={prev}>&#10094;</button>

                        <div className={styles.sliderTrack3D}>
                            {TEAM_MEMBERS.map((member, idx) => {
                                const total = TEAM_MEMBERS.length;
                                const prevIdx = (activeIndex - 1 + total) % total;
                                const nextIdx = (activeIndex + 1) % total;

                                let positionClass = styles.hidden;
                                if (idx === activeIndex) positionClass = styles.active;
                                else if (idx === prevIdx) positionClass = styles.prev;
                                else if (idx === nextIdx) positionClass = styles.next;

                                return (
                                    <div key={member.id} className={`${styles.sliderItem} ${positionClass}`}>
                                        <div className={styles.memberImg}>
                                            <img src={`/static/avatares/${member.avatar}`} alt={member.name} />
                                        </div>
                                        <div className={styles.memberInfo}>
                                            <strong>{member.name}</strong>
                                            <p>{member.role}</p>
                                            <a href="#">Portafolio</a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button className={styles.navNext} onClick={next}>&#10095;</button>
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

