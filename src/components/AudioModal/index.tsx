/**
 * @módulo AudioModal
 * @descripción Interfaz del reproductor de audio con controles de play/pause y visualización de progreso.
 * @arquitectura src/components/AudioModal/index.tsx
 */

import { useEffect, useRef, useCallback } from 'react';
import styles from './AudioModal.module.css';
import useAudioStore from '@/store/useAlmacenAudio';
import useBloqueoScroll from '@/hooks/useBloqueoScroll';

const AudioModal = () => {
    const { isOpen, isPlaying, currentTrack, closeAudio, toggle } = useAudioStore();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useBloqueoScroll(isOpen);

    /**
     * Sincroniza el estado global 'isPlaying' con el elemento <audio> nativo.
     */
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play().catch(() => {
                // Autoplay bloqueado por el navegador (requiere interacción previa)
            });
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    /**
     * Carga y reproduce una nueva pista cuando cambia en el store.
     */
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !currentTrack) return;
        audio.src = currentTrack;
        if (isPlaying) {
            audio.play().catch(() => { });
        }
    }, [currentTrack, isPlaying]);

    /**
     * Manejador de eventos para cerrar el modal presionando la tecla Escape.
     */
    const manejarTecla = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
            closeAudio();
        }
    }, [isOpen, closeAudio]);

    useEffect(() => {
        document.addEventListener('keydown', manejarTecla);
        return () => document.removeEventListener('keydown', manejarTecla);
    }, [manejarTecla]);

    return (
        <>
            <audio ref={audioRef} preload="none" />

            {/* Modal de audio */}
            <div
                id="audioModal"
                className={`${styles['audio-modal']} ${isOpen ? styles.active : ''}`}
            >
                <div className={styles['audio-modal-content']}>
                    <div className={styles['cerrar-audio']}>
                        <div className={styles.icon}>
                            <i className={`fa fa-volume-up ${styles['fa-volume-up']}`} aria-hidden="true" style={{ fontStyle: 'normal' }}>🔊</i>
                            <div className={styles['bar-hoverbox']}></div>
                        </div>

                        <div
                            id="closeAudioModal"
                            className={styles['audio-close']}
                            onClick={closeAudio}
                            role="button"
                            aria-label="Cerrar reproductor"
                        >
                            <h2>&times;</h2>
                        </div>
                    </div>

                    <div className={styles['player-audio']}>
                        <div className={styles.texto}>
                            <h2>
                                <span>Cubeo</span>
                                <strong>/</strong>
                                <span>Desano</span>
                            </h2>
                        </div>
                    </div>

                    <div className={styles.botones}>
                        <div className={styles['contenedor-tempo']}>
                            <svg
                                className={styles['play-svg']}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 281.93 281.93"
                                onClick={toggle}
                                role="button"
                                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                                style={{ cursor: 'pointer' }}
                            >
                                <g>
                                    <circle className={styles['cls-tempo']} cx="140.97" cy="140.97" r="135.47" />
                                    {isPlaying ? (
                                        <g>
                                            <rect x="95" y="85" width="30" height="112" fill="#39a900" rx="5" />
                                            <rect x="157" y="85" width="30" height="112" fill="#39a900" rx="5" />
                                        </g>
                                    ) : (
                                        <path
                                            className={styles['cls-play']}
                                            d="M212.36,125.21l-88.2-50.92c-12.13-7-27.29,1.75-27.29,15.76v101.84c0,14.01,15.16,22.76,27.29,15.76l88.2-50.92c12.13-7,12.13-24.51,0-31.52Z"
                                        />
                                    )}
                                </g>
                            </svg>

                            <div className={styles.barra}>
                                <progress value="0" max="100"></progress>
                                <div className={styles.marker}></div>
                            </div>

                            <div className={styles.option}>
                                <div className={styles.btn}></div>
                                <div className={styles.btn}></div>
                                <div className={styles.btn}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AudioModal;
