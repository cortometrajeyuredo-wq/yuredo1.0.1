/**
 * @módulo Encabezado
 * @descripción Componente de cabecera que contiene el menú lateral y la navegación principal.
 * @arquitectura src/components/encabezado/index.tsx
 */

import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import styles from './Encabezado.module.css';
import useInterfazStore from '@/store/useAlmacenInterfaz';
import type { InterfazState } from '@/store/useAlmacenInterfaz';
import useAudioStore from '@/store/useAlmacenAudio';
import type { AudioState } from '@/store/useAlmacenAudio';

const Encabezado = () => {
    const [isMenuIzquierdoOpen, setIsMenuIzquierdoOpen] = useState(false);
    const [isMenuDerechoOpen, setIsMenuDerechoOpen] = useState(false);

    const seccionActiva = useInterfazStore((state: InterfazState) => state.seccionActiva);
    const abrirAudio = useAudioStore((state: AudioState) => state.openAudio);

    const alternarMenus = () => {
        const newState = !isMenuDerechoOpen;
        setIsMenuDerechoOpen(newState);

        const isMobile = window.innerWidth <= 768;
        if (!isMobile) {

            setIsMenuIzquierdoOpen(newState);
        }
    };

    const cerrarMenuIzquierdo = () => setIsMenuIzquierdoOpen(false);
    const cerrarMenuDerecho = () => setIsMenuDerechoOpen(false);

    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            const isMobile = window.innerWidth <= 768;
            if (!isMobile) return;

            if (entries[0].isIntersecting) {
                setIsMenuIzquierdoOpen(true);
            }
        };

        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        const sentinel = document.getElementById('fin-pagina');
        if (sentinel) {
            observer.observe(sentinel);
        }

        return () => {
            if (sentinel) {
                observer.unobserve(sentinel);
            }
            observer.disconnect();
        };
    }, []);

    /**
     * Realiza un desplazamiento suave hacia la sección seleccionada.
     * @param e Evento de clic
     * @param id ID del elemento destino
     */
    const scrollHaciaSeccion = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        cerrarMenuDerecho();
        cerrarMenuIzquierdo();

        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', `#${id}`);
        } else {
            console.warn(`[Encabezado] Sección no encontrada: #${id}`);
        }
    };

    return (
        <header className={styles.headerContainer}>
            <div className={styles['btn-hamburger-container']}>
                <button
                    className={styles.hamburger}
                    onClick={alternarMenus}
                    aria-label="Abrir menú"
                    aria-expanded={isMenuDerechoOpen}
                >
                    <span>☰</span>
                </button>
            </div>

            <div className={`${styles['vertical-menu']} ${styles['left-menu']} ${isMenuIzquierdoOpen ? styles.active : ''}`}>
                <div className={styles['btn-cerrar-menu-left']}>
                    <button className={styles['close-btn']} onClick={cerrarMenuIzquierdo}>&times;</button>
                </div>
                <div className={styles['contendor-menu-left']}>
                    <ul>
                        <li><a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank" rel="noopener noreferrer">SENA</a></li>
                        <li>
                            <a href="https://senavaupes.blogspot.com/" target="_blank" rel="noopener noreferrer">
                                JIRIJIRIMO
                                <p>Vaupés</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://comunicaciongraficasena.blogspot.com/" target="_blank" rel="noopener noreferrer">
                                CENIGRAF
                                <p>Bogotá</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://actividadfisicaycultura.blogspot.com/" target="_blank" rel="noopener noreferrer">
                                CEFAFC
                                <p>Bogotá</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://mercadoslogisticaytecnologia.blogspot.com/" target="_blank" rel="noopener noreferrer">
                                CGMLTI
                                <p>Bogotá</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sena.edu.co/es-co/formacion/Paginas/tecnoparques.aspx" target="_blank" rel="noopener noreferrer">
                                TECNOPARQUE
                                <p>Bogotá</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles['logo-sena-menu']}>
                    <img src="/static/img/globales/logo-sena.webp" alt="Logo SENA" />
                </div>
            </div>

            <div className={`${styles['vertical-menu']} ${styles['right-menu']} ${isMenuDerechoOpen ? styles.active : ''}`}>
                <div className={styles['btn-cerrar-menu-right']}>
                    <button className={styles['close-btn']} onClick={cerrarMenuDerecho}>&times;</button>
                </div>
                <div className={styles['contenedor-menu-right']}>
                    <ul>
                        <li>
                            <a
                                href="#inicio"
                                className={seccionActiva === 'inicio' ? styles.active : ''}
                                onClick={(e) => scrollHaciaSeccion(e, 'inicio')}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#teaser"
                                className={seccionActiva === 'teaser' ? styles.active : ''}
                                onClick={(e) => scrollHaciaSeccion(e, 'teaser')}
                            >
                                Teaser
                            </a>
                        </li>
                        <li>
                            <a
                                href="#trailer"
                                className={seccionActiva === 'trailer' ? styles.active : ''}
                                onClick={(e) => scrollHaciaSeccion(e, 'trailer')}
                            >
                                Trailer
                            </a>
                        </li>
                        <li>
                            <a
                                href="#motmot"
                                className={seccionActiva === 'motmot' ? styles.active : ''}
                                onClick={(e) => scrollHaciaSeccion(e, 'motmot')}
                            >
                                Mot Mot
                            </a>
                        </li>
                        <li>
                            <a
                                href="#etno"
                                className={seccionActiva === 'etno' ? styles.active : ''}
                                onClick={(e) => scrollHaciaSeccion(e, 'etno')}
                            >
                                Etno-ornitologia
                            </a>
                        </li>
                        <li>
                            <a
                                href="#podcast"
                                className={seccionActiva === 'podcast' ? styles.active : ''}
                                onClick={(e) => scrollHaciaSeccion(e, 'podcast')}
                            >
                                Podcast
                            </a>
                        </li>
                        <li>
                            <a
                                href="#yuredo"
                                className={seccionActiva === 'yuredo' ? styles.active : ''}
                                onClick={(e) => scrollHaciaSeccion(e, 'yuredo')}
                            >
                                Yuredo
                            </a>
                        </li>
                        <li>
                            <a
                                href="#relatos-magicos"
                                className={seccionActiva === 'relatos-magicos' ? styles.active : ''}
                                onClick={(e) => scrollHaciaSeccion(e, 'relatos-magicos')}
                            >
                                Relatos Mágicos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#equipo"
                                className={seccionActiva === 'equipo' ? styles.active : ''}
                                onClick={(e) => scrollHaciaSeccion(e, 'equipo')}
                            >
                                Equipo
                            </a>
                        </li>
                        <li className={styles['audio-controls']}>
                            <button
                                type="button"
                                className={styles.audioButton}
                                onClick={() => { abrirAudio(); cerrarMenuDerecho(); cerrarMenuIzquierdo(); }}
                            >
                                Reproducir
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={styles['logo-sena-menu']}>
                    <img src="/static/img/globales/logo-sena.webp" alt="Logo SENA" />
                </div>
            </div>
        </header>
    );
};

export default Encabezado;
