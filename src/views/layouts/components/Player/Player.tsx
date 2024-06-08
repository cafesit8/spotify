import { useCurrentSong } from '@/store/currentSong'
import { Suspense, lazy } from 'react'
import { usePalette } from 'react-palette'
const PlayerMobile = lazy(() => import('./PlayerMobile'))
const Controls = lazy(() => import('./components/Controls'))
const Info = lazy(() => import('./components/Info'))
const Volume = lazy(() => import('./components/Volume'))

function hexToRgba (hex: string, alpha: number) {
  let r = 0; let g = 0; let b = 0

  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16)
    g = parseInt(hex.slice(3, 5), 16)
    b = parseInt(hex.slice(5, 7), 16)
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function Player () {
  const currentSong = useCurrentSong(state => state.currentSong)
  const { data } = usePalette(currentSong?.song_cover.url ?? '#8a8b8b')
  const background = data.lightVibrant ?? '#8a8b8b'
  const backgroundRgba = hexToRgba(background, 0.3)
  return (
    <footer className='footer [grid-area:footer] bg-[#141414] lg:rounded-xl rounded-none'>
      <div className='rounded-xl lg:flex items-center h-full hidden justify-between p-3 gap-3'>
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
      <div style={{ background: `${backgroundRgba}` }} className='lg:hidden flex items-center w-full h-full p-2'>
        <Suspense fallback={null}>
          <PlayerMobile />
        </Suspense>
      </div>
    </footer>
  )
}
