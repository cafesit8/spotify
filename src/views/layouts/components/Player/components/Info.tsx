import { convertDate } from '@/services/converDates'
import { Music } from '@/types/musicList'

export function Info ({ info }: { info: Music }) {
  return (
    <div className="flex flex-grow-0">
      <article className='flex items-center gap-4 rounded-lg'>
        <picture className='w-28 h-28 overflow-hidden block rounded-md'>
          <img className='w-full h-full object-cover' src={info?.song_cover?.url || 'https://t2.tudocdn.net/700696?w=824&h=494'} alt="Portada de la canción" />
        </picture>
        <div>
          <h6 className='font-light text-white text-base'>{info?.name || 'Título de la canción'}</h6>
          <h6 className='font-light text-white/80 text-sm'>{info?.artist || 'Nombre del artista'}</h6>
          <h6 className='font-light text-white/80 text-sm'>{convertDate(info?.realease_date)}</h6>
        </div>
      </article>
    </div>
  )
}
