import { convertDate } from '@/services/converDates'
import { useCurrentMusicInfo } from '@/store/currentMusicInfo'

export default function Player () {
  const info = useCurrentMusicInfo((state) => state.currentMusic)
  return (
    <footer className='[grid-area:footer] footer bg-[#141414] rounded-xl flex justify-center p-3 gap-3'>
      <div className="flex-none flex-shrink-0">
        <article className='flex items-center p-2 gap-4 rounded-lg'>
          <picture className='w-28 h-auto overflow-hidden block rounded-md'>
            <img className='w-full h-full object-cover' src={info?.song_cover.url} alt="" />
          </picture>
          <div>
            <h5 className='font-light text-white text-base'>{info?.name}</h5>
            <h6 className='font-light text-white/80 text-sm'>{info?.artist}</h6>
            <h6 className='font-light text-white/80 text-sm'>{info?.realease_date && convertDate(info?.realease_date)}</h6>
          </div>
        </article>
      </div>
      <div className="flex-auto border-2 max-w-[300px] mx-auto text-center">
        Current Music {info?.name}
      </div>
      <div className="flex-none border-2 flex-shrink-0">
        Volumen
      </div>
    </footer>
  )
}
