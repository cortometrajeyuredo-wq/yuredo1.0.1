import { create } from 'zustand';

interface AudioState {
    isOpen: boolean;
    isPlaying: boolean;
    currentTrack: string | null;
    openAudio: (track?: string) => void;
    closeAudio: () => void;
    play: () => void;
    pause: () => void;
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
