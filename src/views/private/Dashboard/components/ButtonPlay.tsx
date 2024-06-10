import { PauseIcon, PlayIcon } from '@/icons/icons'
import { useCurrentMusicInfo } from '@/store/currentPlayList'
import { useCurrentSong } from '@/store/currentSong'
import { Music } from '@/types/musicList'
import { useCallback } from 'react'

export default function ButtonPlay ({ song }: { song: Music }) {
  const setCurrentSong = useCurrentSong(state => state.setCurrentSong)
  const setCurrentMusic = useCurrentMusicInfo((state) => state.setCurrentMusic)
  const { currentSong, setPlaying, playing } = useCurrentSong(state => state)
  const isPlaying = currentSong?.id === song.id

  const handleClick = useCallback(() => {
    if (isPlaying) {
      setPlaying(!playing)
      return
    }
    setCurrentSong(song)
    setCurrentMusic(song)
    setPlaying(true)
  }, [song, isPlaying, playing, setCurrentSong, setCurrentMusic, setPlaying])
  return (
    <button onClick={handleClick} aria-label='play' className="lg:block hidden card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition">
      {isPlaying && playing ? <PauseIcon className='text-black' /> : <PlayIcon className='text-black' />}
    </button>
  )
}
