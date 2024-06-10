import { Music } from '@/types/musicList'
import ButtonPlay from './ButtonPlay'
import { useCurrentSong } from '@/store/currentSong'
import { useCurrentMusicInfo } from '@/store/currentPlayList'
import { memo, useEffect, useCallback } from 'react'

function preloadImage (url: string) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = url
  document.head.appendChild(link)
}

export function Card ({ song }: { song: Music }) {
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
  }, [isPlaying, playing, setCurrentSong, setCurrentMusic, setPlaying, song])

  useEffect(() => {
    if (song?.song_cover?.url) {
      preloadImage(song.song_cover.url)
    }
  }, [song])

  return (
    <article onClick={handleClick} className="group lg:hover:bg-[#222222] shadow-lg hover:shadow-xl  rounded-md ransi transition-all duration-300 aspect-square w-full" >
      <div className="playlist-item transition-all duration-300 flex lg:p-2 overflow-hidden gap-2 pb-3 rounded-md flex-col w-full">
        <picture className="block w-full bg-[#292929] aspect-square h-full flex-none relative lg:rounded-none rounded-md">
          <div className='absolute right-3 bottom-3 translate-y-4 transition-all duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10'>
            <ButtonPlay song={song} />
          </div>
          <img fetchPriority='high' src={song?.song_cover.url} className="object-cover w-full h-full rounded-md" alt={`Portada de la cancion ${song.name}`} />
        </picture>
        <div className="flex flex-auto flex-col">
          <h4 className="text-white lg:text-base text-xs font-normal w-full truncate">
            {song.name}
          </h4>
          <span className="lg:text-[14px] text-xs text-gray-400 truncate w-full">
            {song.artist}
          </span>
        </div>
      </div>
    </article>
  )
}

export const CardMemo = memo(Card)
