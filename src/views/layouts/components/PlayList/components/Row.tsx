import { convertDate } from '@/services/converDates'
import { useCurrentMusicInfo } from '@/store/currentPlayList'
import { Music } from '@/types/musicList'
import soundWaves from '@/img/sounds.gif'
import { AddIcon, HeartIcon, OptionsIcon } from '@/icons/icons'
import TooltipButton from '@/components/ui/TooltipButton'
import { toast } from 'sonner'
import { useCurrentSong } from '@/store/currentSong'

type Props = {
  collapse?: boolean
  song: Music
}

export default function Row ({ song, collapse }: Props) {
  const setCurrentMusic = useCurrentMusicInfo((state) => state.setCurrentMusic)
  const addSongToPlayList = useCurrentMusicInfo((state) => state.addSongToTheList)
  const { setCurrentSong, setPlaying } = useCurrentSong(state => state)
  const playList = useCurrentMusicInfo((state) => state.playList)
  const currentSong = useCurrentSong(state => state.currentSong)
  const validate = playList.some((item) => item.id === song.id)

  function handlePlayList () {
    if (validate) {
      toast.info('Esta cancion ya se encuentra en la fila')
    } else {
      addSongToPlayList(song)
      toast.success('Canción agregada a la fila')
    }
  }

  function handleClick () {
    setCurrentSong(song)
    setCurrentMusic(song)
    setPlaying(true)
  }
  return (
    <tr className='hover:bg-[#222222] duration-200 cursor-pointer'>
      <td className={`${collapse ? 'rounded-tr-none rounded-br-none' : 'rounded-tr-lg rounded-br-lg'} rounded-tl-lg rounded-bl-lg`}>
        <article className='flex items-center justify-between p-2 gap-2 rounded-lg text-white group/item'>
          <div onClick={handleClick} className='flex gap-2 flex-1'>
            <picture className='w-12 h-12 overflow-hidden block rounded-md'>
              <img className='w-full h-full object-cover' src={song.song_cover.url} alt={`Portada de la cancion ${song.song_cover.url}`} />
            </picture>
            <div>
              <h5 className={`${currentSong?.name === song.name ? 'text-green-500' : 'text-white'} ${collapse ? 'max-w-[200px]' : 'max-w-[180px]'} font-light text-base truncate`}>{song.name}</h5>
              <h6 className='font-light text-white/80 text-sm'>{song.artist}</h6>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            {currentSong?.name === song.name ? <img className='w-6 h-8' src={soundWaves} alt="sounds wave" /> : <></>}
            <TooltipButton className='mt-1' name={<OptionsIcon className={`w-5 h-5 text-white/70 group/edit ${currentSong?.name === song.name ? 'item:visible' : 'invisible group-hover/item:visible'}`} />} tooltiName='Opciones'>
              <div className='hover:bg-[#303030] text-start p-2 text-sm hover:cursor-pointer rounded-sm flex items-center gap-2 font-normal'>
                <HeartIcon className='w-5 h-5 text-white/60' />
                <span>Me Gusta</span>
              </div>
              <div onClick={handlePlayList} className='hover:bg-[#303030] hover:cursor-pointer text-start p-2 text-sm rounded-sm flex items-center gap-2 font-normal'>
                <AddIcon className='w-5 h-5 text-white/60' />
                <span>Agregar a la fila</span>
              </div>
            </TooltipButton>
          </div>
        </article>
      </td>
      {collapse && (
        <>
          <td>
            <article className='text-center'>
              <h5 className='font-light text-white/70 text-sm'>{convertDate(song.realease_date)}</h5>
            </article>
          </td>
          <td className='rounded-tr-lg rounded-br-lg'>
            <article className='text-center'>
              <h5 className='font-light text-white/70 text-sm'>@{song.user.username}</h5>
            </article>
          </td>
        </>
      )}
    </tr>
  )
}
