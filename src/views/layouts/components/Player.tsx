import { LowVolumenIcon, MutedIcon, NormalVolumenIcon, PauseIcon, PlayIcon } from '@/icons/icons'
import { convertDate } from '@/services/converDates'
import { formatTime } from '@/services/formaCurrentTime'
import { useCurrentMusicInfo } from '@/store/currentMusicInfo'
import { useEffect, useRef, useState } from 'react'

export default function Player () {
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
  return (
    <footer className='[grid-area:footer] footer bg-[#141414] rounded-xl flex justify-between p-3 gap-3'>
      <div className="">
        <article className='flex items-center gap-4 rounded-lg'>
          <picture className='w-28 h-auto overflow-hidden block rounded-md'>
            <img className='w-full h-full object-cover' src={info?.song_cover.url} alt="" />
          </picture>
          <div>
            <h5 className='font-light text-white text-base'>{info?.name}</h5>
            <h6 className='font-light text-white/80 text-sm'>{info?.artist}</h6>
            <h6 className='font-light text-white/80 text-sm'>{info?.realease_date && convertDate(info?.realease_date)}</h6>
          </div>
        </article>
      </div>
      <div className="flex-1 max-w-[450px] mx-auto text-center flex flex-col items-center gap-5 justify-center">
        <button onClick={handlePlay} className='bg-white hover:scale-105 duration-150 rounded-full w-9 h-9 grid place-content-center'>{playing ? <PauseIcon className='text-black' /> : <PlayIcon className='text-black' />}</button>
        <div className='flex gap-2 items-center'>
          <span className='text-xs'>{formatTime(currentTime)}</span>
          <input className='w-[450px]' type="range" value={currentTime} max={audioRef.current?.duration} onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.currentTime = parseFloat(e.target.value)
            }
          }} />
          <span className='text-xs'>{audioRef.current && formatTime(audioRef.current?.duration)}</span>
        </div>
        <audio ref={audioRef} src={info?.song_mp3.url}></audio>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <button onClick={handleMuted}>{muted ? <MutedIcon className='w-5 h-5' /> : volumeStep()}</button>
        <input onChange={handleVolume} value={volume} className='w-[100px]' max={1} min={0} step={0.01} type="range" />
      </div>
    </footer>
  )
}
