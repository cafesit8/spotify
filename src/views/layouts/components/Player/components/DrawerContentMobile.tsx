import { useCurrentMusicInfo } from '@/store/currentPlayList'
import sounds from '@/img/sounds.gif'
import { useCurrentSong } from '@/store/currentSong'
import { Music } from '@/types/musicList'

export default function DrawerContentMobile () {
  const { playList, setCurrentMusic } = useCurrentMusicInfo(state => state)
  const { currentSong, setCurrentSong, setPlaying } = useCurrentSong(state => state)
  function handleClick (song: Music) {
    setCurrentSong(song)
    setCurrentMusic(song)
    setPlaying(true)
  }
  return (
    <main className='w-full h-full py-4 px-2 overflow-y-auto flex flex-col gap-3'>
      {playList.map((song, i) => (
        <article onClick={() => handleClick(song)} key={song?.id} className='w-full flex items-center gap-2'>
          <div className='w-[30px] grid place-content-center'>
            {currentSong?.id === song.id
              ? <img width={24} height={35} className='h-[35px]' src={sounds} alt='gif of sound of a music' />
              : <span>{String(i + 1).padStart(2, '0')}</span>}
          </div>
          <picture className='pr-1'>
            <img className='rounded-md' width={50} src={song?.song_cover?.url || 'https://t2.tudocdn.net/700696?w=824&h=494'} alt="" />
          </picture>
          <div>
            <h6 className='font-light text-white text-base w-full truncate'>{song?.name || 'Título de la canción'}</h6>
            <h6 className='font-light text-white/80 text-sm w-full truncate'>{song?.artist || 'Nombre del artista'}</h6>
          </div>
        </article>
      ))}
    </main>
  )
}
