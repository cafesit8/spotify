import { Music } from '@/types/musicList'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CurrentMusicInfo = {
  playList: [] | Music[]
  setCurrentMusic: (currentMusic: any) => void
  addSongToTheList: (song: Music) => void
}

export const useCurrentMusicInfo = create(persist<CurrentMusicInfo>(
  (set, get) => ({
    playList: [],
    setCurrentMusic: (song: Music) => {
      const playList = get().playList
      const foundSong = playList.some((item) => item.id === song.id)
      if (foundSong) {
        const newPlayList = playList.filter((item) => item.id !== song.id)
        newPlayList.unshift(song)
        set({ playList: newPlayList })
      } else {
        set((state) => ({ playList: [song, ...state.playList] }))
      }
    },
    addSongToTheList: (song: Music) => set((state) => ({ playList: [...state.playList, song] }))
  }),
  {
    name: 'playList'
  }
))
