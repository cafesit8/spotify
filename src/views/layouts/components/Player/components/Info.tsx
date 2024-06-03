import { convertDate } from '@/services/converDates'
import { Music } from '@/types/musicList'

export function Info ({ info }: { info: Music }) {
  return (
    <div className="flex flex-grow-0">
      <article className='flex items-center gap-4 rounded-lg'>
        <picture className='w-28 h-28 overflow-hidden block rounded-md'>
          <img className='w-full h-full object-cover' src={info?.song_cover.url} alt="" />
        </picture>
        <div>
          <h5 className='font-light text-white text-base'>{info?.name}</h5>
          <h6 className='font-light text-white/80 text-sm'>{info?.artist}</h6>
          <h6 className='font-light text-white/80 text-sm'>{info?.realease_date && convertDate(info?.realease_date)}</h6>
        </div>
      </article>
    </div>
  )
}
