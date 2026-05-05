/**
 * @módulo InterfazStore
 * @descripción Maneja el estado de la interfaz de usuario, como la sección activa para navegación.
 * @arquitectura src/store/useInterfazStore.ts
 */

import { create } from 'zustand';

/**
 * Estado de la interfaz de navegación.
 */
export interface InterfazState {
    /** ID de la sección que se visualiza actualmente en el viewport */
    seccionActiva: string;
    /** Actualiza el ID de la sección activa */
    setSeccionActiva: (id: string) => void;
}

const useInterfazStore = create<InterfazState>((set) => ({
    seccionActiva: 'inicio',
    setSeccionActiva: (id: string) => set({ seccionActiva: id }),
}));

export default useInterfazStore;
