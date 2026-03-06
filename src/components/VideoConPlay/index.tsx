/**
 * @módulo VideoConPlay
 * @descripción Componente de video con botón de play personalizado usando el SVG Recurso 3.
 * Al hacer clic en el botón de play, el video comienza a reproducirse y el botón desaparece.
 * @arquitectura src/components/VideoConPlay/index.tsx
 */

import { useRef, useState } from 'react';
import styles from './VideoConPlay.module.css';

interface PropiedadesVideoConPlay {
    /** ID del elemento video (opcional) */
    id?: string;
    /** Clases CSS adicionales para el elemento video */
    claseVideo?: string;
    /** Clases CSS adicionales para el contenedor externo */
    claseContenedor?: string;
    /** Ruta del archivo de video */
    src: string;
    /** Tipo MIME del video */
    tipo?: string;
    /** Texto alternativo de accesibilidad */
    textoAlternativo?: string;
}

const VideoConPlay = ({
    id,
    claseVideo,
    claseContenedor,
    src,
    tipo = 'video/mp4',
    textoAlternativo = 'Tu navegador no soporta la reproducción de videos.',
}: PropiedadesVideoConPlay) => {
    const [reproduciendo, setReproduciendo] = useState(false);
    const referenciaVideo = useRef<HTMLVideoElement>(null);

    /** Inicia la reproducción del video al hacer clic en el botón play */
    const iniciarReproduccion = () => {
        if (referenciaVideo.current) {
            referenciaVideo.current.play();
            setReproduciendo(true);
        }
    };

    /** Muestra el botón play nuevamente cuando el video termina */
    const alTerminar = () => setReproduciendo(false);

    /** Muestra el botón play si el video se pausa manualmente */
    const alPausar = () => setReproduciendo(false);

    return (
        <div className={`${styles.contenedorVideo} ${claseContenedor ?? ''}`}>
            <video
                ref={referenciaVideo}
                id={id}
                preload="auto"
                controls
                playsInline
                className={`${styles.video} ${claseVideo ?? ''}`}
                onEnded={alTerminar}
                onPause={alPausar}
                onPlay={() => setReproduciendo(true)}
            >
                <source src={src} type={tipo} />
                {textoAlternativo}
            </video>

            {/* Botón de play personalizado: visible solo cuando el video no reproduce */}
            {!reproduciendo && (
                <button
                    className={styles.botonPlay}
                    onClick={iniciarReproduccion}
                    aria-label="Reproducir video"
                >
                    <img
                        src="/static/img/Recurso 3.svg"
                        alt="Play"
                        className={styles.iconoPlay}
                    />
                </button>
            )}
        </div>
    );
};

export default VideoConPlay;
