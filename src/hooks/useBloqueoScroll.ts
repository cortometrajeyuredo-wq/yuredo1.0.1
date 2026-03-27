/**
 * @módulo useBloqueoScroll
 * @descripción Inmoviliza el desplazamiento (scroll) del cuerpo de la página cuando existen 
 * elementos superpuestos activos (ej: modales, menús).
 * @arquitectura src/hooks/useBloqueoScroll.ts
 */

import { useEffect, useRef } from 'react';

/** 
 * Contador global para administrar múltiples capas de bloqueo simultáneas.
 * Asegura que el scroll se restablezca solo cuando todos los elementos se cierren.
 */
let conteoBloqueos = 0;

/**
 * Hook personalizado para controlar el estado del scroll del documento.
 * @param estaBloqueado - Booleano que indica si se debe activar el bloqueo.
 */
const useBloqueoScroll = (estaBloqueado: boolean) => {
    /** Referencia local para rastrear si esta instancia específica activó un bloqueo */
    const estabaBloqueado = useRef(false);

    useEffect(() => {
        // --- Activar Bloqueo ---
        if (estaBloqueado && !estabaBloqueado.current) {
            conteoBloqueos++;
            estabaBloqueado.current = true;

            // Si es el primer bloqueo activo, ocultamos el overflow del body
            if (conteoBloqueos === 1) {
                document.body.style.overflow = 'hidden';
            }
        }
        // --- Desactivar Bloqueo ---
        else if (!estaBloqueado && estabaBloqueado.current) {
            conteoBloqueos = Math.max(0, conteoBloqueos - 1);
            estabaBloqueado.current = false;

            // Si ya no quedan bloqueos activos, restauramos el scroll original
            if (conteoBloqueos === 0) {
                document.body.style.overflow = '';
            }
        }

        /**
         * Función de limpieza (Cleanup)
         * Se ejecuta al desmontar el componente para asegurar que no queden bloqueos huérfanos.
         */
        return () => {
            if (estabaBloqueado.current) {
                conteoBloqueos = Math.max(0, conteoBloqueos - 1);
                estabaBloqueado.current = false;
                if (conteoBloqueos === 0) {
                    document.body.style.overflow = '';
                }
            }
        };
    }, [estaBloqueado]);
};

export default useBloqueoScroll;
