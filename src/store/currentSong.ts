import { Music } from '@/types/musicList'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CurrentSong = {
  currentSong: null | Music;
  setCurrentSong: (song: any) => void;
  playing: boolean;
  setPlaying: (value: boolean) => void;
};

export const useCurrentSong = create(persist<CurrentSong>((set) => ({
  currentSong: null,
  setCurrentSong: (song: any) => set({ currentSong: song }),
  playing: false,
  setPlaying: (value) => set({ playing: value })
}), {
  name: 'currentSong'
}))
