import { LowVolumenIcon, MutedIcon, NormalVolumenIcon } from '@/icons/icons'
import { useCurrentMusicInfo } from '@/store/currentPlayList'
import { useCurrentSong } from '@/store/currentSong'
import { ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react'

type Props = {
  repeatPlayList: boolean
  nextSong: () => void
  prevSong: () => void
  currentTime: number
  volume: number
  audioRef: any
  handleMuted: () => void
  handleVolume: (e: any) => void
  volumeStep: () => ReactNode | undefined
  handleRepeat: () => void
}

type PlayerContextType = {
  children: ReactNode
}

export const Player = createContext({} as Props)

export default function PlayerContext ({ children }: PlayerContextType) {
  const playList = useCurrentMusicInfo((state) => state.playList)
  const [repeatPlayList, setRepeatPlayList] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.25)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const setCurrentSong = useCurrentSong(state => state.setCurrentSong)
  const currentSong = useCurrentSong(state => state.currentSong)
  const { playing, setPlaying } = useCurrentSong(state => state)

  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem('currentSongIndex')
    return savedIndex ? parseInt(savedIndex, 10) : 0
  })

  function nextSong () {
    const nextIndex = currentIndex === playList.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
    setCurrentSong(playList[nextIndex])
    setPlaying(true)
  }

  function prevSong () {
    const prevIndex = currentIndex === 0 ? playList.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setCurrentSong(playList[prevIndex])
    setPlaying(true)
  }

  const handleRepeat = () => setRepeatPlayList(!repeatPlayList)

  useEffect(() => {
    if (audioRef.current != null && currentSong?.song_mp3.url != null) {
      audioRef.current.src = currentSong.song_mp3.url
      audioRef.current.play()
    }
  }, [currentSong])

  useEffect(() => {
    if (!audioRef.current || !currentSong?.song_mp3.url) return
    const audioElement = audioRef.current
    localStorage.setItem('currentSongIndex', JSON.stringify(currentIndex))

    const handleEnded = async () => {
      if (repeatPlayList) {
        const nextIndex = currentIndex === playList.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(nextIndex)
        setCurrentSong(playList[nextIndex])
      } else {
        audioElement.play()
      }
    }

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded)
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded)
      }
    }
  }, [currentIndex, playList, repeatPlayList, currentSong, setCurrentSong])

  useEffect(() => {
    if (audioRef.current != null) {
      if (!playing) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
    }
  }, [playing, setPlaying])

  useEffect(() => {
    if (audioRef.current != null && currentSong?.song_mp3.url != null) {
      audioRef.current.volume = volume
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
    }

    return () => {
      if (audioRef.current != null) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [currentSong, volume])

  function handleTimeUpdate () {
    if (audioRef.current != null) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  function handleMuted () {
    if (audioRef.current != null) {
      if (audioRef.current.muted) {
        audioRef.current.muted = false
      } else {
        audioRef.current.muted = true
      }
    }
  }

  function handleVolume (e: any) {
    if (audioRef.current != null) {
      audioRef.current.volume = e[0]
      setVolume(e[0])
    }
  }

  function volumeStep () {
    if (audioRef.current != null) {
      if (volume == 0) return <MutedIcon className='w-6 h-6' />
      if (volume > 0 && volume < 0.25) return <LowVolumenIcon className='w-6 h-6' />
      if (volume >= 0.25) return <NormalVolumenIcon className='w-6 h-6' />
    }
  }
  return (
    <Player.Provider value={{
      audioRef, handleMuted, handleVolume, currentTime, volume, volumeStep, repeatPlayList, handleRepeat, nextSong, prevSong
    }}>
      {children}
    </Player.Provider>
  )
}

export const useContextPlayer = () => useContext(Player)
