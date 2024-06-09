import { PauseIcon, PlayIcon } from '@/icons/icons'
import { useCurrentSong } from '@/store/currentSong'
import { Suspense, lazy, useState } from 'react'
const DrawerMobile = lazy(() => import('../Drawer/DrawerMobile'))
const Info = lazy(() => import('./components/Info'))
const Controls = lazy(() => import('./components/Controls'))

export default function PlayerMobile () {
  const [open, setOpen] = useState(false)
  const { playing, setPlaying, currentSong } = useCurrentSong()
  return (
    <>
      <button onClick={() => setOpen(!open)} type='button' className='h-full flex-1 p-0 overflow-hidden'>
        <article className='flex h-full items-center gap-2 overflow-hidden'>
          <picture className='max-w-[55px] aspect-square h-full rounded-md overflow-hidden block'>
            <img className='w-full h-full object-cover bg-[#292929]' src={currentSong?.song_cover?.url || 'https://t2.tudocdn.net/700696?w=824&h=494'} alt="Portada de la canción" />
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
      <Suspense fallback={null}>
        <DrawerMobile open={open} handleOpen={() => setOpen(false)}>
          <Info />
          <Controls />
        </DrawerMobile>
      </Suspense>
    </>
  )
}
