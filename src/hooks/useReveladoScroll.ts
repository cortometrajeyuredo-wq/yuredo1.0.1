/**
 * @módulo useScrollReveal
 * @descripción Activa el efecto scroll-reveal en todos los elementos que
 * posean la clase CSS `reveal`. Al entrar en el viewport, añade la clase
 * `visible` que dispara las transiciones definidas en index.css.
 * @arquitectura src/hooks/useScrollReveal.ts
 */

import { useEffect } from 'react';

/**
 * Opciones de configuración para el IntersectionObserver.
 * El umbral 0.12 garantiza que el elemento sea perceptible antes de revelar.
 */
const OPCIONES_OBSERVER: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12,
};

/**
 * Hook personalizado que observa los elementos `.reveal` del DOM
 * y añade la clase `visible` cuando el usuario hace scroll hacia ellos.
 * Se ejecuta una sola vez al montar el componente raíz.
 */
const useScrollReveal = () => {
    useEffect(() => {
        const manejadorInterseccion: IntersectionObserverCallback = (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visible');

                    observer.unobserve(entrada.target);
                }
            });
        };

        const observer = new IntersectionObserver(manejadorInterseccion, OPCIONES_OBSERVER);

        const elementos = document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        elementos.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};

export default useScrollReveal;
