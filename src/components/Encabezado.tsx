import React, { useState } from 'react';
import styles from './Encabezado.module.css';
import useInterfazStore from '@/store/useInterfazStore';
import useAudioStore from '@/store/useAudioStore';

const Encabezado = () => {
    // Estado para controlar la visibilidad de los menús
    const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
    const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

    // Leer sección activa desde Zustand para ScrollSpy
    const seccionActiva = useInterfazStore((state) => state.seccionActiva);
    // Abrir modal de audio
    const openAudio = useAudioStore((state) => state.openAudio);

    const toggleMenus = () => {
        setIsLeftMenuOpen(!isLeftMenuOpen);
        setIsRightMenuOpen(!isRightMenuOpen);
    };

    const closeLeftMenu = () => setIsLeftMenuOpen(false);
    const closeRightMenu = () => setIsRightMenuOpen(false);

    // Función para navegación con Scroll Suave
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        closeRightMenu();

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', `#${id}`);
        } else {
            console.warn(`[Encabezado] Sección no encontrada: #${id}`);
        }
    };

    return (
        <header className={styles.headerContainer}>
            {/* Botón Hamburguesa Fijo */}
            <div className={styles['btn-hamburger-container']}>
                <button className={styles.hamburger} onClick={toggleMenus} aria-label="Abrir menú">
                    <span>☰</span>
                </button>
            </div>

            {/* Menú Izquierdo (SENA / Enlaces Externos) */}
            <div className={`${styles['vertical-menu']} ${styles['left-menu']} ${isLeftMenuOpen ? styles.active : ''}`}>
                <div className={styles['cerrar-logo']}>
                    <button className={styles['close-btn']} onClick={closeLeftMenu}>&times;</button>
                    <img src="/static/img/logo-sena.webp" alt="Logo SENA" />
                </div>
                <div className={styles['contendor-menu-left']}>
                    <ul>
                        <li><a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank" rel="noopener noreferrer">SENA</a></li>
                        <li>
                            <a href="https://senavaupes.blogspot.com/" target="_blank" rel="noopener noreferrer">JIRIJIRIMO</a>
                            <p>Vaupés</p>
                        </li>
                        <li>
                            <a href="https://comunicaciongraficasena.blogspot.com/" target="_blank" rel="noopener noreferrer">CENIGRAF</a>
                            <p>Bogotá</p>
                        </li>
                        <li>
                            <a href="https://actividadfisicaycultura.blogspot.com/" target="_blank" rel="noopener noreferrer">CEFAFC</a>
                            <p>Bogotá</p>
                        </li>
                        <li>
                            <a href="https://mercadoslogisticaytecnologia.blogspot.com/" target="_blank" rel="noopener noreferrer">CGMLTI</a>
                            <p>Bogotá</p>
                        </li>
                        <li>
                            <a href="https://www.sena.edu.co/es-co/formacion/Paginas/tecnoparques.aspx" target="_blank" rel="noopener noreferrer">TECNOPARQUE</a>
                            <p>Bogotá</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Menú Derecho (Navegación Interna) */}
            <div className={`${styles['vertical-menu']} ${styles['right-menu']} ${isRightMenuOpen ? styles.active : ''}`}>
                <div className={styles['btn-cerrar-menu-right']}>
                    <button className={styles['close-btn']} onClick={closeRightMenu}>&times;</button>
                </div>
                <div className={styles['contenedor-menu-right']}>
                    <ul>
                        <li>
                            <a
                                href="#inicio"
                                className={seccionActiva === 'inicio' ? styles.active : ''}
                                onClick={(e) => scrollToSection(e, 'inicio')}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#motmot"
                                className={seccionActiva === 'motmot' ? styles.active : ''}
                                onClick={(e) => scrollToSection(e, 'motmot')}
                            >
                                Mot Mot
                            </a>
                        </li>
                        <li>
                            <a
                                href="#yuredo"
                                className={seccionActiva === 'yuredo' ? styles.active : ''}
                                onClick={(e) => scrollToSection(e, 'yuredo')}
                            >
                                Yuredo
                            </a>
                        </li>
                        <li>
                            <a
                                href="#etno"
                                className={seccionActiva === 'etno' ? styles.active : ''}
                                onClick={(e) => scrollToSection(e, 'etno')}
                            >
                                Etno-ornitologia
                            </a>
                        </li>
                        <li>
                            <a
                                href="#museo"
                                className={seccionActiva === 'museo' ? styles.active : ''}
                                onClick={(e) => scrollToSection(e, 'museo')}
                            >
                                Museo
                            </a>
                        </li>
                        <li>
                            <a
                                href="#equipo"
                                className={seccionActiva === 'equipo' ? styles.active : ''}
                                onClick={(e) => scrollToSection(e, 'equipo')}
                            >
                                Equipo
                            </a>
                        </li>
                        <li className={styles['audio-controls']}>
                            <a
                                id="openAudioModal"
                                onClick={(e) => { e.preventDefault(); openAudio(); closeRightMenu(); }}
                                style={{ cursor: 'pointer' }}
                            >
                                Reproducir
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles['logo-sena-menu']}>
                    <img src="/static/img/logo-sena.webp" alt="Logo SENA" />
                </div>
            </div>
        </header>
    );
};

export default Encabezado;
