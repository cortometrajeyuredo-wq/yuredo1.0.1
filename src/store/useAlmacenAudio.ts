/**
 * @módulo AudioStore
 * @descripción Maneja el estado global del reproductor de audio.
 * @arquitectura src/store/useAudioStore.ts
 */

import { create } from 'zustand';

/**
 * Define el estado y las acciones del reproductor de audio.
 */
export interface AudioState {
    /** Indica si el modal del reproductor está abierto */
    isOpen: boolean;
    /** Indica si el audio se está reproduciendo actualmente */
    isPlaying: boolean;
    /** Ruta del archivo de audio actual */
    currentTrack: string | null;
    /** Abre el modal y opcionalmente cambia la pista */
    openAudio: (track?: string) => void;
    /** Cierra el modal y detiene la reproducción */
    closeAudio: () => void;
    /** Inicia la reproducción */
    play: () => void;
    /** Pausa la reproducción */
    pause: () => void;
    /** Alterna entre reproducir y pausar */
    toggle: () => void;
}

const DEFAULT_TRACK = '/static/audio-player/cubeo.mp3'; // Track principal disponible

const useAudioStore = create<AudioState>((set) => ({
    isOpen: false,
    isPlaying: false,
    currentTrack: DEFAULT_TRACK,

    openAudio: (track?: string) => set((state) => ({
        isOpen: true,
        currentTrack: track ?? state.currentTrack ?? DEFAULT_TRACK,
    })),

    closeAudio: () => set({
        isOpen: false,
        isPlaying: false,
    }),

    play: () => set({ isPlaying: true }),
    pause: () => set({ isPlaying: false }),
    toggle: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default useAudioStore;
