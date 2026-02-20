/**
 * @módulo EstadoGlobal
 * @descripción Almacena estados generales de la aplicación (ej. inicialización).
 * @arquitectura src/store/useEstadoGlobal.ts
 */

import { create } from 'zustand';

/**
 * Estado general de inicialización.
 */
interface EstadoGlobal {
    /** Indica si la aplicación o módulo ha terminado de cargar */
    estaInicializado: boolean;
    /** Actualiza el estado de inicialización */
    setInicializado: (valor: boolean) => void;
}

export const useEstadoGlobal = create<EstadoGlobal>((set) => ({
    estaInicializado: false,
    setInicializado: (valor) => set({ estaInicializado: valor }),
}));
