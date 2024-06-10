import { convertDate } from '@/services/converDates'
import { useCurrentSong } from '@/store/currentSong'

export default function Header () {
  const currentSong = useCurrentSong(state => state.currentSong)
  return (
    <header className='flex gap-6'>
      <picture className='block w-[250px] h-[250px] overflow-hidden rounded-lg'>
        <img className='w-full h-full object-cover' src={currentSong?.song_cover.url || 'https://t2.tudocdn.net/700696?w=824&h=494'} alt={`Portada de la cancion ${currentSong?.song_cover.url}`} />
      </picture>
      <div className='flex flex-col justify-end'>
        <h3 className='text-7xl font-semibold'>{currentSong?.name.toLocaleUpperCase() || 'Título de la canción'}</h3>
        <h4 className='text-3xl font-semibold'>{currentSong?.artist || 'Nombre del artista'}</h4>
        <h4 className='text-lg text-white/70'>{convertDate(currentSong?.realease_date)}</h4>
      </div>
    </header>
  )
}
