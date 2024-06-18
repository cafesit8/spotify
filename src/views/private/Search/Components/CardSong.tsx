import { Music } from '@/types/musicList'
import ButtonPlay from '../../Dashboard/Components/ButtonPlay'
import { useCallback } from 'react'
import { useCurrentSong } from '@/store/currentSong'
import { useCurrentMusicInfo } from '@/store/currentPlayList'

export default function CardSong ({ song }: { song: Music }) {
  const setCurrentSong = useCurrentSong(state => state.setCurrentSong)
  const setCurrentMusic = useCurrentMusicInfo((state) => state.setCurrentMusic)
  const { currentSong, setPlaying } = useCurrentSong(state => state)
  const isPlaying = currentSong?.id === song.id

  const handleClick = useCallback(() => {
    if (isPlaying) {
      return
    }
    setCurrentSong(song)
    setCurrentMusic(song)
    setPlaying(true)
  }, [isPlaying, setCurrentSong, setCurrentMusic, setPlaying, song])

  return (
    <article onClick={handleClick} className="group lg:hover:bg-[#222222] shadow-lg hover:shadow-xl  rounded-md ransi transition-all duration-300 aspect-square w-full" >
      <div className="playlist-item transition-all duration-300 flex lg:p-2 overflow-hidden gap-2 pb-3 rounded-md flex-col w-full">
        <picture className="block w-full bg-[#292929] aspect-square h-full flex-none relative lg:rounded-none rounded-md">
          <div className='absolute right-2 bottom-2 translate-y-4 transition-all duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10'>
            <ButtonPlay song={song} />
          </div>
          <img fetchPriority='high' src={song?.song_cover.url} className="object-cover w-full h-full rounded-md" alt={`Portada de la cancion ${song.name}`} />
        </picture>
        <div className="flex flex-auto flex-col">
          <h4 className="text-white lg:text-base text-xs font-normal w-full truncate">
            {song.name}
          </h4>
          <span className="lg:text-[14px] text-[10px] text-gray-400 truncate w-full">
            {song.artist}
          </span>
        </div>
      </div>
    </article>
  )
}
