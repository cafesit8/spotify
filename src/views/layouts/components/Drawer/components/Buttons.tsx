import { ToolTip } from '@/components/ui/ToolTip'
import { DownloadIcon, HeartIcon, PauseIcon, PlayIcon, RandomIcon } from '@/icons/icons'
import { useCurrentSong } from '@/store/currentSong'

export default function Buttons () {
  const { setPlaying, playing } = useCurrentSong()
  const handleClick = () => setPlaying(!playing)
  return (
    <section className='flex gap-6 items-center'>
      <ToolTip text={`${playing ? 'Pausar' : 'Reproducir'}`}>
        <button onClick={handleClick} className='bg-green-500 p-4 rounded-full'>
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
  )
}
