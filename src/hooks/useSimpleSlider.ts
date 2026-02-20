import { useState } from 'react';

interface UseSimpleSliderProps {
    totalSlides: number;
    initialIndex?: number;
    loop?: boolean;
    visibleSlides?: number; // Cuántas cards se muestran a la vez
}

const useSimpleSlider = ({
    totalSlides,
    initialIndex = 0,
    loop = true,
    visibleSlides = 1
}: UseSimpleSliderProps) => {
    const [index, setIndex] = useState(initialIndex);

    // Máximo índice posible para no mostrar espacio vacío al final
    const maxIndex = Math.max(0, totalSlides - visibleSlides);

    const next = () => {
        setIndex((prevIndex) => {
            if (prevIndex >= maxIndex) {
                return loop ? 0 : prevIndex;
            }
            return prevIndex + 1;
        });
    };

    const prev = () => {
        setIndex((prevIndex) => {
            if (prevIndex === 0) {
                return loop ? maxIndex : 0;
            }
            return prevIndex - 1;
        });
    };

    const goTo = (i: number) => {
        if (i >= 0 && i <= maxIndex) {
            setIndex(i);
        }
    };

    // Porcentaje de desplazamiento (relativo al ancho de UNA card)
    const offsetPorcentaje = (100 / visibleSlides) * index;

    return {
        index,
        next,
        prev,
        goTo,
        totalSlides,
        visibleSlides,
        offsetPorcentaje
    };
};

export default useSimpleSlider;
