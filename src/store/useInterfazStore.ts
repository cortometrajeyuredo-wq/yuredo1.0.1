import { create } from 'zustand';

interface InterfazState {
    seccionActiva: string;
    setSeccionActiva: (id: string) => void;
}

const useInterfazStore = create<InterfazState>((set) => ({
    seccionActiva: 'inicio',
    setSeccionActiva: (id: string) => set({ seccionActiva: id }),
}));

export default useInterfazStore;
