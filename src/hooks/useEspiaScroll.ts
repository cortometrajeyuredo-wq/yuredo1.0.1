/**
 * @módulo useEspiaScroll
 * @descripción Monitorea el desplazamiento del usuario y utiliza el IntersectionObserver
 * para detectar qué sección del landing page es predominante, actualizando el estado de navegación.
 * @arquitectura src/hooks/useEspiaScroll.ts
 */

import { useEffect, useRef } from 'react';
import useInterfazStore from '@/store/useAlmacenInterfaz';

/** Identificadores de las secciones del DOM que se deben rastrear */
const SECCIONES_OBSERVADAS = ['inicio', 'motmot', 'yuredo', 'etno', 'podcast', 'equipo'];

/**
 * Hook que activa el espionaje de scroll.
 */
const useEspiaScroll = () => {
    /** Función del store para establecer la sección activa globalmente */
    const { setSeccionActiva } = useInterfazStore();

    /**
     * Referencia persistente para la función de actualización.
     * Evita que el efecto de observación se reinicie innecesariamente si el store cambia.
     */
    const refActualizador = useRef(setSeccionActiva);
    useEffect(() => {
        refActualizador.current = setSeccionActiva;
    }, [setSeccionActiva]);

    useEffect(() => {
        /** Configuración del observador: márgenes para definir cuándo una sección se considera "activa" */
        const opciones = {
            root: null,
            rootMargin: '-40% 0px -55% 0px',
            threshold: 0
        };

        /**
         * Lógica que se ejecuta cuando una sección entra o sale de la zona de observación.
         */
        const manejarInterseccion: IntersectionObserverCallback = (entradas) => {
            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {
                    refActualizador.current(entrada.target.id);
                }
            });
        };

        const observador = new IntersectionObserver(manejarInterseccion, opciones);

        SECCIONES_OBSERVADAS.forEach((id) => {
            const elemento = document.getElementById(id);
            if (elemento) {
                observador.observe(elemento);
            }
        });

        return () => {
            observador.disconnect();
        };
    }, []);
};

export default useEspiaScroll;
