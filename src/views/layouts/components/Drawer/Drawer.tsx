import { DrawerContent } from '@/components/ui/Drawer'
import { useCurrentSong } from '@/store/currentSong'
import { usePalette } from 'react-palette'
import { Suspense, lazy } from 'react'
const Header = lazy(() => import('./components/Header'))
const Table = lazy(() => import('./components/Table'))
const Buttons = lazy(() => import('./components/Buttons'))

export default function DrawerContainer () {
  const currentSong = useCurrentSong(state => state.currentSong)
  const { data } = usePalette(currentSong?.song_cover.url ?? '#8a8b8b')
  const background = data.darkMuted ?? '#8a8b8b'

  return (
    <DrawerContent style={{ background: `linear-gradient(180deg, ${background} 0%, #141414 37%)` }} className='w-full h-svh rounded-none text-white border-none'>
      <main className='w-[1300px] m-auto h-full p-3 flex flex-col gap-6 overflow-y-auto'>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <Suspense fallback={null}>
          <Buttons />
        </Suspense>
        <Suspense fallback={null}>
          <Table />
        </Suspense>
      </main>
    </DrawerContent>
  )
}
