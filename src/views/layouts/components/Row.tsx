import { convertDate } from '@/services/converDates'
import { useCurrentMusicInfo } from '@/store/currentMusicInfo'
import { Music } from '@/types/musicList'
import soundWaves from '@/img/sounds.gif'
import { OptionsIcon } from '@/icons/icons'
import TooltipButton from '@/components/ui/TooltipButton'

type Props = {
  collapse?: boolean
  song: Music
}

export default function Row ({ song, collapse }: Props) {
  const setCurrentMusic = useCurrentMusicInfo((state) => state.setCurrentMusic)
  const currentMusic = useCurrentMusicInfo((state) => state.currentMusic)

  return (
    <tr className='hover:bg-[#222222] duration-200 cursor-pointer'>
      <td className={`${collapse ? 'rounded-tr-none rounded-br-none' : 'rounded-tr-lg rounded-br-lg'} rounded-tl-lg rounded-bl-lg`}>
        <article className='flex items-center justify-between p-2 gap-3 rounded-lg text-white group/item'>
          <div onClick={() => setCurrentMusic(song)} className='flex gap-2 flex-1'>
            <picture className='w-12 h-12 overflow-hidden block rounded-md'>
              <img className='w-full h-full object-cover' src={song.song_cover.url} alt="" />
            </picture>
            <div>
              <h5 className={`${currentMusic?.name === song.name ? 'text-green-500' : 'text-white'} font-light text-base truncate max-w-[180px]`}>{song.name}</h5>
              <h6 className='font-light text-white/80 text-sm'>{song.artist}</h6>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            {currentMusic?.name === song.name ? <img className='w-6 h-8' src={soundWaves} alt="" /> : <></>}
            <TooltipButton className='mt-1' name={<OptionsIcon className={`w-5 h-5 text-white/70 group/edit ${currentMusic?.name === song.name ? 'item:visible' : 'invisible group-hover/item:visible'}`} />} tooltiName='Opciones'>
              <button className='hover:bg-[#303030] text-start p-2 text-sm rounded-sm'>Me Gusta</button>
              <button className='hover:bg-[#303030] text-start p-2 text-sm rounded-sm'>Agregar a la fila</button>
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
