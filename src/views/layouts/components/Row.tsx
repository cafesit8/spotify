import { convertDate } from '@/services/converDates'
import { useCurrentMusicInfo } from '@/store/currentMusicInfo'
import { Music } from '@/types/musicList'

type Props = {
  collapse?: boolean
  song: Music
}

export default function Row ({ song, collapse }: Props) {
  const setCurrentMusic = useCurrentMusicInfo((state) => state.setCurrentMusic)
  const currentMusic = useCurrentMusicInfo((state) => state.currentMusic)

  return (
    <tr onClick={() => setCurrentMusic(song)} className='hover:bg-[#222222] duration-200 cursor-pointer'>
      <td className={`${collapse ? 'rounded-tr-none rounded-br-none' : 'rounded-tr-lg rounded-br-lg'} rounded-tl-lg rounded-bl-lg`}>
        <article className='flex p-2 gap-4 rounded-lg text-white'>
          <picture className='w-12 h-12 overflow-hidden block rounded-md'>
            <img className='w-full h-full object-cover' src={song.song_cover.url} alt="" />
          </picture>
          <div>
            <h5 className={`${currentMusic?.name === song.name ? 'text-green-500' : 'text-white'} font-light text-base`}>{song.name}</h5>
            <h6 className='font-light text-white/80 text-sm'>{song.artist}</h6>
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
