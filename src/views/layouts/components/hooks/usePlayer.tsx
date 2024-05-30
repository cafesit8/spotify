import { LowVolumenIcon, MutedIcon, NormalVolumenIcon } from '@/icons/icons'
import { useCurrentMusicInfo } from '@/store/currentMusicInfo'
import { useEffect, useRef, useState } from 'react'

export default function usePlayer () {
  const info = useCurrentMusicInfo((state) => state.currentMusic)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
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
    if (audioRef.current != null && info?.song_mp3.url != null) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
    }

    return () => {
      if (audioRef.current != null) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [info?.song_mp3.url])

  function handleTimeUpdate () {
    if (audioRef.current != null) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }
  useEffect(() => {
    if (audioRef.current != null && info?.song_mp3.url != null) {
      audioRef.current.addEventListener('ended', () => {
        setPlaying(false)
      })
    }
  }, [audioRef, info?.song_mp3.url])

  useEffect(() => {
    if (audioRef.current != null && info?.song_mp3.url != null) {
      audioRef.current.src = info.song_mp3.url
      audioRef.current.play()
      audioRef.current.volume = 0.5
      setPlaying(true)
      setVolume(0.5)
    }
  }, [info])

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
    info
  }
}
