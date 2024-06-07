import { DrawerContent } from '@/components/ui/Drawer'
import { useCurrentSong } from '@/store/currentSong'
import { usePalette } from 'react-palette'
import { ReactNode } from 'react'

export default function DrawerContainer ({ children }: { children: ReactNode }) {
  const currentSong = useCurrentSong(state => state.currentSong)
  const { data } = usePalette(currentSong?.song_cover.url ?? '#8a8b8b')
  const background = data.lightVibrant ?? '#8a8b8b'

  return (
    <DrawerContent style={{ background: `linear-gradient(180deg, ${background} 0%, #141414 37%)` }} className='w-full h-svh rounded-none text-white border-none'>
      {children}
    </DrawerContent>
  )
}
