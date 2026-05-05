/**
 * @módulo useDeslizadorSimple
 * @descripción Lógica reutilizable para carruseles (sliders) con soporte de bucle infinito,
 * navegación manual y cálculo de desplazamiento para múltiples elementos visibles.
 * @arquitectura src/hooks/useDeslizadorSimple.ts
 */

import { useState } from 'react';

/** Configuración de entrada para el hook del deslizador */
interface PropiedadesDeslizadorSimple {
    /** Cantidad total de elementos en el conjunto de datos */
    totalDiapositivas: number;
    /** Índice por el cual comenzar la visualización (defecto: 0) */
    indiceInicial?: number;
    /** Indica si al llegar al final debe reiniciar al primer elemento (defecto: true) */
    bucle?: boolean;
    /** Cuántos elementos se muestran simultáneamente en pantalla (defecto: 1) */
    diapositivasVisibles?: number;
}

/**
 * Provee el estado y las funciones de control para un carrusel.
 * @param props - Configuración del deslizador.
 */
const useDeslizadorSimple = ({
    totalDiapositivas,
    indiceInicial = 0,
    bucle = true,
    diapositivasVisibles = 1
}: PropiedadesDeslizadorSimple) => {
    /** Estado del índice actual que se muestra al inicio del carrusel */
    const [indice, setIndice] = useState(indiceInicial);

    /** Máximo índice alcanzable para evitar mostrar espacios vacíos al final del contenedor */
    const indiceMaximo = Math.max(0, totalDiapositivas - diapositivasVisibles);

    /**
     * Avanza a la siguiente diapositiva.
     * Si está al final y el bucle está activo, regresa al inicio.
     */
    const siguiente = () => {
        setIndice((indicePrevio) => {
            if (indicePrevio >= indiceMaximo) {
                return bucle ? 0 : indicePrevio;
            }
            return indicePrevio + 1;
        });
    };

    /**
     * Retrocede a la diapositiva anterior.
     * Si está al inicio y el bucle está activo, salta al final.
     */
    const anterior = () => {
        setIndice((indicePrevio) => {
            if (indicePrevio === 0) {
                return bucle ? indiceMaximo : 0;
            }
            return indicePrevio - 1;
        });
    };

    /**
     * Salta directamente a una posición específica.
     * @param i - El índice de destino validado dentro del rango permitido.
     */
    const irA = (i: number) => {
        if (i >= 0 && i <= indiceMaximo) {
            setIndice(i);
        }
    };

    /**
     * Cálculo del porcentaje de desplazamiento horizontal (CSS Transform Translate).
     * Se basa en el ancho relativo de una diapositiva según la cantidad visible.
     */
    const desplazamientoPorcentaje = (100 / diapositivasVisibles) * indice;

    return {
        indice,
        siguiente,
        anterior,
        irA,
        totalDiapositivas,
        diapositivasVisibles,
        desplazamientoPorcentaje
    };
};

export default useDeslizadorSimple;
