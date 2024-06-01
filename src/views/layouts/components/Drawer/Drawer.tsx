import { DrawerContent } from '@/components/ui/Drawer'
import { useCurrentSong } from '@/store/currentSong'
import { ToolTip } from '@/components/ui/ToolTip'
import { DownloadIcon, HeartIcon, PauseIcon, PlayIcon, RandomIcon } from '@/icons/icons'
import { usePalette } from 'react-palette'
import Header from './components/Header'
import Table from './components/Table'

export default function DrawerContainer ({ playing }: { playing: boolean }) {
  const currentSong = useCurrentSong(state => state.currentSong)
  const { data } = usePalette(currentSong?.song_cover.url ?? '#8a8b8b')
  const background = data.lightMuted ?? '#8a8b8b'

  return (
    <DrawerContent style={{ background: `linear-gradient(180deg, ${background} 0%, #141414 37%)` }} className='w-full h-svh rounded-none text-white border-none'>
      <main className='w-[1300px] m-auto h-full p-3 flex flex-col gap-6 overflow-y-auto'>
        <Header currentSong={currentSong} />
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
        <Table />
      </main>
    </DrawerContent>
  )
}
