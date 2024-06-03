import { LowVolumenIcon, MutedIcon, NormalVolumenIcon } from '@/icons/icons'
import { useCurrentMusicInfo } from '@/store/currentPlayList'
import { useEffect, useRef, useState } from 'react'
import { useCurrentSong } from '@/store/currentSong'

export default function usePlayer () {
  const playList = useCurrentMusicInfo((state) => state.playList)
  const [repeatPlayList, setRepeatPlayList] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const setCurrentSong = useCurrentSong(state => state.setCurrentSong)
  const currentSong = useCurrentSong(state => state.currentSong)
  const { playing, setPlaying } = useCurrentSong()

  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem('currentSongIndex')
    return savedIndex ? parseInt(savedIndex, 10) : 0
  })

  function nextSong () {
    const nextIndex = currentIndex === playList.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
    setCurrentSong(playList[nextIndex])
  }

  function prevSong () {
    const prevIndex = currentIndex === 0 ? playList.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setCurrentSong(playList[prevIndex])
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
      if (volume == 0) return <MutedIcon className='w-5 h-5' />
      if (volume > 0 && volume < 0.25) return <LowVolumenIcon className='w-5 h-5' />
      if (volume >= 0.25) return <NormalVolumenIcon className='w-5 h-5' />
    }
  }

  return {
    playing,
    currentTime,
    volume,
    audioRef,
    handleMuted,
    handleVolume,
    volumeStep,
    currentSong,
    repeatPlayList,
    handleRepeat,
    nextSong,
    prevSong
  }
}
