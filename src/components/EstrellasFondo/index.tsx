/**
 * @módulo EstrellasFondo
 * @descripción Componente que genera estrellas aleatorias en el fondo de una sección.
 * Emula el comportamiento del script `start.js` de la versión legacy.
 * @arquitectura src/components/EstrellasFondo/index.tsx
 */

import { useEffect, useState } from 'react';
import styles from './EstrellasFondo.module.css';

interface EstrellasFondoProps {
    cantidad: number;
    leftMin?: number;
    leftMax?: number;
    className?: string;
}

interface EstrellaCoords {
    id: number;
    top: number;
    left: number;
    animationDelay: string;
}

const generarEstrellas = (cantidad: number, leftMin: number, leftMax: number): EstrellaCoords[] => {
    return Array.from({ length: cantidad }).map((_, index) => ({
        id: index,
        top: Math.random() * 100,
        left: leftMin + Math.random() * (leftMax - leftMin),
        animationDelay: `${Math.random() * 5}s`,
    }));
};

const EstrellasFondo = ({ cantidad, leftMin = 0, leftMax = 100, className = '' }: EstrellasFondoProps) => {
    const [estrellas, setEstrellas] = useState<EstrellaCoords[]>([]);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            setEstrellas(generarEstrellas(cantidad, leftMin, leftMax));
        });

        return () => cancelAnimationFrame(raf);
    }, [cantidad, leftMin, leftMax]);

    return (
        <div className={`${styles.contenedorEstrellas} ${className}`} aria-hidden="true">
            {estrellas.map((estrella) => (
                <div
                    key={estrella.id}
                    className={styles.estrella}
                    style={{
                        top: `${estrella.top}%`,
                        left: `${estrella.left}%`,
                        animationDelay: estrella.animationDelay
                    }}
                />
            ))}
        </div>
    );
};

export default EstrellasFondo;
