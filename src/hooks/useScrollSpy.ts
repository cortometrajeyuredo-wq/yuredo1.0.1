import { useEffect, useRef } from 'react';
import useInterfazStore from '@/store/useInterfazStore';

// IDs de las secciones a observar
const SECCIONES_OBSERVADAS = ['inicio', 'motmot', 'yuredo', 'etno', 'museo', 'equipo'];

const useScrollSpy = () => {
    const { setSeccionActiva } = useInterfazStore();

    // Fix M2: Usar ref para capturar setSeccionActiva sin re-disparar el effect
    const setRef = useRef(setSeccionActiva);
    useEffect(() => { setRef.current = setSeccionActiva; });

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-40% 0px -55% 0px',
            threshold: 0
        };

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setRef.current(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        SECCIONES_OBSERVADAS.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []); // Sin dependencias — se monta UNA sola vez
};

export default useScrollSpy;
