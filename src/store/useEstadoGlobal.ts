import { create } from 'zustand';

interface EstadoGlobal {
    estaInicializado: boolean;
    setInicializado: (valor: boolean) => void;
}

export const useEstadoGlobal = create<EstadoGlobal>((set) => ({
    estaInicializado: false,
    setInicializado: (valor) => set({ estaInicializado: valor }),
}));
