import { DrawerContent } from '@/components/ui/Drawer'
import './drawer.css'
import { useCurrentSong } from '@/store/currentSong'
import { convertDate } from '@/services/converDates'
import { ToolTip } from '@/components/ui/ToolTip'
import { DownloadIcon, HeartIcon, PauseIcon, PlayIcon, RandomIcon } from '@/icons/icons'

export default function DrawerContainer ({ playing }: { playing: boolean }) {
  const currentSong = useCurrentSong(state => state.currentSong)
  return (
    <DrawerContent className='drawer w-full h-screen rounded-none bg-[#141414] text-white border-none'>
      <main className='w-[1300px] m-auto h-full p-3 flex flex-col gap-6'>
        <header className='flex gap-6'>
          <picture className='block w-[250px] h-[250px] overflow-hidden rounded-lg'>
            <img className='w-full h-full object-cover' src={currentSong?.song_cover.url} alt="" />
          </picture>
          <div className='flex flex-col justify-end'>
            <h3 className='text-7xl font-semibold'>{currentSong?.name.toLocaleUpperCase()}</h3>
            <h4 className='text-3xl font-semibold'>{currentSong?.artist}</h4>
            <h4 className='text-3xl text-white/70'>{currentSong?.realease_date && convertDate(currentSong?.realease_date)}</h4>
          </div>
        </header>
        <section className='flex gap-6 items-center'>
          <ToolTip text={`${playing ? 'Pausar' : 'Reproducir'}`}>
            <button className='bg-green-500 p-4 rounded-full'>
              {!playing ? <PlayIcon className='text-black' /> : <PauseIcon className='text-black' />}
            </button>
          </ToolTip>
          <ToolTip text='Habilitar el Modo Aleatorio'>
            <button className='mt-2'>
              <RandomIcon className='text-white/70 w-7 h-7' />
            </button>
          </ToolTip>
          <ToolTip text='Me Gusta'>
            <button className='bg-green-500 p-1 rounded-full'>
              <HeartIcon className='text-black w-6 h-6' />
            </button>
          </ToolTip>
          <ToolTip text='Descargar'>
            <button className='mt-2'>
              <DownloadIcon className='text-white/70 w-7 h-7' />
            </button>
          </ToolTip>
        </section>
      </main>
    </DrawerContent>
  )
}
