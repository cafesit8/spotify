import { DrawerContent } from '@/components/ui/Drawer'
import { useCurrentSong } from '@/store/currentSong'
import { usePalette } from 'react-palette'
import Header from './components/Header'
import Table from './components/Table'
import Buttons from './components/Buttons'

export default function DrawerContainer () {
  const currentSong = useCurrentSong(state => state.currentSong)
  const { data } = usePalette(currentSong?.song_cover.url ?? '#8a8b8b')
  const background = data.lightMuted ?? '#8a8b8b'

  return (
    <DrawerContent style={{ background: `linear-gradient(180deg, ${background} 0%, #141414 37%)` }} className='w-full h-svh rounded-none text-white border-none'>
      <main className='w-[1300px] m-auto h-full p-3 flex flex-col gap-6 overflow-y-auto'>
        <Header currentSong={currentSong} />
        <Buttons />
        <Table />
      </main>
    </DrawerContent>
  )
}
