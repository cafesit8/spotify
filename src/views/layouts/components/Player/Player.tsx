import { Suspense, lazy, useState } from 'react'
import { useCurrentSong } from '@/store/currentSong'
import { PauseIcon, PlayIcon } from '@/icons/icons'

const Controls = lazy(() => import('./components/Controls'))
const Info = lazy(() => import('./components/Info'))
const Volume = lazy(() => import('./components/Volume'))

export default function Player () {
  const [open, setOpen] = useState(false)
  const currentSong = useCurrentSong(state => state.currentSong)
  const { playing, setPlaying } = useCurrentSong()
  return (
    <footer className='[grid-area:footer] footer bg-[#141414] lg:rounded-xl rounded-md'>
      <div className='rounded-xl lg:flex hidden justify-between p-3 gap-3'>
        <Suspense fallback={null}>
          <Info />
        </Suspense>
        <Suspense fallback={null}>
          <Controls />
        </Suspense>
        <Suspense fallback={null}>
          <Volume />
        </Suspense>
      </div>
      <div className='lg:hidden flex items-center w-full h-full'>
        <button onClick={() => setOpen(!open)} type='button' className='h-full flex-1 p-0'>
          <article className='flex items-center gap-2 rounded-lg'>
            <picture className='w-[60px] h-[60px] overflow-hidden block rounded-md'>
              <img className='w-full h-full object-cover' src={currentSong?.song_cover?.url || 'https://t2.tudocdn.net/700696?w=824&h=494'} alt="Portada de la canción" />
            </picture>
            <div>
              <h6 className='font-light text-start text-white lg:text-base text-sm truncate'>{currentSong?.name || 'Título de la canción'}</h6>
              <h6 className='font-light text-start text-white/80 lg:text-sm text-xs truncate'>{currentSong?.artist || 'Nombre del artista'}</h6>
            </div>
          </article>
        </button>
        <button onClick={() => setPlaying(!playing)} className='h-full w-14 grid place-content-center'>
          {playing ? <PauseIcon className='text-white w-6 h-6' /> : <PlayIcon className='text-white w-6 h-6' />}
        </button>
      </div>
    </footer>
  )
}
