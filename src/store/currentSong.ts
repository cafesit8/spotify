import { Music } from '@/types/musicList'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CurrentSong = {
  currentSong: null | Music
  setCurrentSong: (song: any) => void
}

export const useCurrentSong = create(persist<CurrentSong>((set) => ({
  currentSong: null,
  setCurrentSong: (song: any) => set({ currentSong: song })
}), {
  name: 'currentSong'
}))
