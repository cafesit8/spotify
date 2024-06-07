import { convertDate } from '@/services/converDates'
import { useCurrentSong } from '@/store/currentSong'

export default function Info () {
  const currentSong = useCurrentSong(state => state.currentSong)

  return (
    <div className="flex lg:flex-grow-0 lg:flex-none flex-1">
      <article className='flex lg:flex-row lg:p-0 p-5 flex-col items-center gap-4 rounded-lg w-full'>
        <picture className='lg:w-28 lg:h-28 max-w-[300px] overflow-hidden block rounded-md'>
          <img className='w-full h-full object-cover' src={currentSong?.song_cover?.url || 'https://t2.tudocdn.net/700696?w=824&h=494'} alt="Portada de la canción" />
        </picture>
        <div>
          <h6 className='font-light text-white text-base'>{currentSong?.name || 'Título de la canción'}</h6>
          <h6 className='font-light text-white/80 text-sm'>{currentSong?.artist || 'Nombre del artista'}</h6>
          <h6 className='font-light text-white/80 text-sm lg:block hidden'>{convertDate(currentSong?.realease_date)}</h6>
        </div>
      </article>
    </div>
  )
}
