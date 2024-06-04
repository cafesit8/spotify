import { Music } from '@/types/musicList'
import ButtonPlay from './ButtonPlay'

export default function Card ({ song }: { song: Music }) {
  return (
    <article className="group relative hover:bg-[#222222] shadow-lg hover:shadow-xl  rounded-md ransi transition-all duration-300 aspect-square w-full" >
      <div className='absolute right-4 bottom-16 translate-y-4 transition-all duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10'>
        <ButtonPlay song={song} />
      </div>
      <div className="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-3 rounded-md flex-col w-full">
        <picture className="w-full h-full flex-none">
          <img src={song?.song_cover.url} className="object-cover w-full h-full rounded-md" />
        </picture>
        <div className="flex flex-auto flex-col">
          <h4 className="text-white text-sm">
            {song.name}
          </h4>
          <span className="text-xs text-gray-400 truncate w-full">
            {song.artist}
          </span>
        </div>
      </div>
    </article>
  )
}
