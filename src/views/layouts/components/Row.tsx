import { convertDate } from '@/services/converDates'
import { Music } from '@/types/musicList'

type Props = {
  collapse?: boolean
  song: Music
}

export default function Row ({ song, collapse }: Props) {
  return (
    <tr className='hover:bg-[#222222] duration-200 cursor-pointer'>
      <td>
        <article className='flex p-2 gap-4 rounded-lg'>
          <picture className='w-12 h-1w-12 overflow-hidden block rounded-md'>
            <img className='w-full h-full object-cover' src={song.song_cover.url} alt="" />
          </picture>
          <div>
            <h5 className='font-light text-white text-base'>{song.name}</h5>
            <h6 className='font-light text-white/80 text-sm'>{song.artist}</h6>
          </div>
        </article>
      </td>
      {collapse && (
        <>
          <td>
            <article className='text-center'>
              <h5 className='font-light text-white text-base'>{convertDate(song.realease_date)}</h5>
            </article>
          </td>
          <td>
            <article className='text-center'>
              <h5 className='font-light text-white text-base'>{song.user.username}</h5>
            </article>
          </td>
        </>
      )}
    </tr>
  )
}
