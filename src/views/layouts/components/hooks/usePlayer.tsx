import { LowVolumenIcon, MutedIcon, NormalVolumenIcon } from '@/icons/icons'
import { useCurrentMusicInfo } from '@/store/currentMusicInfo'
import { useEffect, useRef, useState } from 'react'
import { usePersistedState } from './useStateLocalStorage'

export default function usePlayer () {
  const playList = useCurrentMusicInfo((state) => state.playList)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentMusic, setCurrentMusic] = usePersistedState('currentMusic', null)

  const currentIndex = playList.findIndex((item) => item.id === currentMusic?.id)

  useEffect(() => {
    if (playList.length > 0) {
      if (currentMusic) {
        const actualIndex = playList.findIndex((item) => item.id === currentMusic?.id)
        setCurrentMusic(playList[actualIndex])
      } else {
        setCurrentMusic(playList[0])
      }
    }
  }, [playList, currentMusic, setCurrentMusic])

  const handlePlay = () => {
    if (audioRef.current != null) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setPlaying(true)
      } else {
        audioRef.current.pause()
        setPlaying(false)
      }
    }
  }
  useEffect(() => {
    if (audioRef.current != null && currentMusic?.song_mp3.url != null) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
    }

    return () => {
      if (audioRef.current != null) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [currentMusic?.song_mp3.url])

  function handleTimeUpdate () {
    if (audioRef.current != null) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  useEffect(() => {
    if (audioRef.current != null && currentMusic?.song_mp3.url != null) {
      audioRef.current.addEventListener('ended', () => {
        if (currentIndex === playList.length - 1) {
          setCurrentMusic(playList[0])
        }
        setCurrentMusic(playList[currentIndex + 1])
      })
    }
  }, [audioRef, currentMusic, playList, currentIndex])

  useEffect(() => {
    if (audioRef.current != null && currentMusic?.song_mp3.url != null) {
      audioRef.current.src = currentMusic.song_mp3.url
      audioRef.current.play()
      setPlaying(true)
    }
  }, [currentMusic])

  function handleMuted () {
    if (audioRef.current != null) {
      if (audioRef.current.muted) {
        audioRef.current.muted = false
        setMuted(false)
      } else {
        audioRef.current.muted = true
        setMuted(true)
      }
    }
  }

  function handleVolume (e: any) {
    if (audioRef.current != null) {
      audioRef.current.volume = e.target.value
      setVolume(e.target.value)
    }
  }

  function volumeStep () {
    if (audioRef.current != null) {
      if (volume == 0) return <MutedIcon className='w-5 h-5' />
      if (volume > 0 && volume < 0.5) return <LowVolumenIcon className='w-5 h-5' />
      if (volume >= 0.5) return <NormalVolumenIcon className='w-5 h-5' />
    }
  }

  return {
    playing,
    muted,
    currentTime,
    volume,
    audioRef,
    handlePlay,
    handleMuted,
    handleVolume,
    volumeStep,
    currentMusic
  }
}
