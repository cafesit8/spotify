import { Music } from '@/types/musicList'
import ButtonPlay from './ButtonPlay'

export default function Card ({ song }: { song: Music }) {
  return (
    <article className="group hover:bg-[#222222] shadow-lg hover:shadow-xl  rounded-md ransi transition-all duration-300 aspect-square w-full" >
      <div className="playlist-item transition-all duration-300 flex p-2 overflow-hidden gap-2 pb-3 rounded-md flex-col w-full">
        <picture className="w-full h-full flex-none relative">
          <div className='absolute right-3 bottom-3 translate-y-4 transition-all duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10'>
            <ButtonPlay song={song} />
          </div>
          <img src={song?.song_cover.url} className="object-cover w-full h-full rounded-md" />
        </picture>
        <div className="flex flex-auto flex-col">
          <h4 className="text-white text-base font-normal">
            {song.name}
          </h4>
          <span className="text-[14px] text-gray-400 truncate w-full">
            {song.artist}
          </span>
        </div>
      </div>
    </article>
  )
}
