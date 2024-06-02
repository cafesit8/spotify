import { convertDate } from '@/services/converDates'
import { formatTime } from '@/services/formaCurrentTime'
import { useCurrentMusicInfo } from '@/store/currentPlayList'
import { useCurrentSong } from '@/store/currentSong'
import soundWaves from '@/img/sounds.gif'
import { PlayIcon, TimeIcon } from '@/icons/icons'
import { ToolTip } from '@/components/ui/ToolTip'

export default function Table () {
  const playList = useCurrentMusicInfo(state => state.playList)
  const currentSong = useCurrentSong(state => state.currentSong)
  const setCurrentMusic = useCurrentMusicInfo((state) => state.setCurrentMusic)
  const setCurrentSong = useCurrentSong(state => state.setCurrentSong)

  function handleClick (song: any) {
    setCurrentSong(song)
    setCurrentMusic(song)
  }
  return (
    <table className='w-full divide-y divide-white/20'>
      <thead className='sticky top-0'>
        <tr>
          <th className='font-normal text-sm text-white/60 w-14'>#</th>
          <th className='font-normal text-sm text-white/60 text-start'>Título</th>
          <th className='font-normal text-sm text-white/60'>Álbum</th>
          <th className='font-normal text-sm text-white/60'>Fecha de lanzamiento</th>
          <th className='font-normal text-sm text-white/60'>Publicado por</th>
          <th className='font-normal text-sm text-white/60'>
            <ToolTip text='Duración'>
              <TimeIcon className='w-5 h-5 mt-1' />
            </ToolTip>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='h-3'></tr>
        {playList.map((song, i) => (
          <tr key={song.id} onClick={() => handleClick(song)} className='hover:bg-[#222222] cursor-pointer duration-200 group/item'>
            <td className='text-center rounded-tl-md rounded-bl-md'>
              <div className='flex justify-center relative'>
                <span className='text-white/80 font-light'>
                  {currentSong?.id === song.id
                    ? <img className='w-5 h-8' src={soundWaves} alt="" />
                    : (
                      <>
                        <PlayIcon className='w-5 h-5 absolute inset-0 m-auto group/edit invisible group-hover/item:visible' />
                        <span className='group/edit visible group-hover/item:invisible'>
                          {i + 1}
                        </span>
                      </>
                    )}
                </span>
              </div>
            </td>
            <td>
              <div className='p-2 pl-0'>
                <h5 className={`${currentSong?.id === song.id ? 'text-green-400' : 'text-white'} font-light text-base truncate`}>{song.name}</h5>
                <h6 className='font-extralight text-white/70 text-sm'>{song.artist}</h6>
              </div>
            </td>
            <td className='text-center'>
              <span className='text-white/70 font-extralight'>{song.album}</span>
            </td>
            <td className='text-center'>
              <span className='text-white/70 font-extralight'>{convertDate(song?.realease_date)}</span>
            </td>
            <td className='text-center'>
              <span className='text-white/70 font-extralight'>@{song.user.username}</span>
            </td>
            <td className='text-center rounded-tr-md rounded-br-md'>
              <span className='text-white/70 font-extralight'>{formatTime(Number(song.duration))}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
