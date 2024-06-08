import { DrawerContent } from '@/components/ui/Drawer'
import { useCurrentSong } from '@/store/currentSong'
import { usePalette } from 'react-palette'
import { ReactNode } from 'react'

export default function DrawerContainer ({ children, isMobile }: { children: ReactNode, isMobile?: boolean }) {
  const currentSong = useCurrentSong(state => state.currentSong)
  const { data } = usePalette(currentSong?.song_cover.url ?? '#8a8b8b')
  const background = isMobile ? '#1E1D1D' : (data.lightVibrant ?? '#8a8b8b')

  return (
    <DrawerContent style={{ background: `linear-gradient(180deg, ${background} 0%, ${isMobile ? '#1E1D1D' : '#141414'} 37%)` }} className={`w-full z-[999999999] ${isMobile ? 'h-[60dvh]' : 'h-dvh'} rounded-none text-white border-none`}>
      {children}
    </DrawerContent>
  )
}
