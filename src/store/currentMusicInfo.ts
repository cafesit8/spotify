import { Music } from '@/types/musicList'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CurrentMusicInfo = {
  currentMusic: null | Music
  setCurrentMusic: (currentMusic: any) => void
}

export const useCurrentMusicInfo = create(persist<CurrentMusicInfo>(
  (set) => ({
    currentMusic: null,
    setCurrentMusic: (currentMusic: Music) => set({ currentMusic })
  }),
  {
    name: 'currentMusicInfo'
  }
))
