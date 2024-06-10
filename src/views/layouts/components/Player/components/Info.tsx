import { convertDate } from '@/services/converDates'
import { useCurrentSong } from '@/store/currentSong'

export default function Info () {
  const currentSong = useCurrentSong(state => state.currentSong)

  return (
    <div className="flex lg:flex-grow-0 flex-1 lg:flex-none items-center">
      <article className='flex lg:flex-row lg:p-0 p-5 pb-0 flex-col items-center gap-4 rounded-lg w-full'>
        <picture className='lg:w-28 lg:h-28 w-full overflow-hidden block rounded-md'>
          <img className='w-full h-full object-cover' src={currentSong?.song_cover?.url || 'https://t2.tudocdn.net/700696?w=824&h=494'} alt={`Portada de la canción ${currentSong?.song_cover?.url}`} />
        </picture>
        <div className='w-full flex-1 lg:w-auto lg:flex hidden flex-col justify-end'>
          <h6 className='font-light text-white text-base'>{currentSong?.name || 'Título de la canción'}</h6>
          <h6 className='font-light text-white/80 text-sm'>{currentSong?.artist || 'Nombre del artista'}</h6>
          <h6 className='font-light text-white/80 text-sm lg:block hidden'>{convertDate(currentSong?.realease_date)}</h6>
        </div>
      </article>
    </div>
  )
}
