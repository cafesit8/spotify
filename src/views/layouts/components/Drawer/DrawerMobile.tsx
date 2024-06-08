import { DownIcon } from '@/icons/icons'
import { useCurrentSong } from '@/store/currentSong'
import { Drawer } from '@material-tailwind/react'
import type { DrawerProps } from '@material-tailwind/react'
import { ReactNode } from 'react'
import { usePalette } from 'react-palette'

export type DrawerMobileProps = DrawerProps & {
  open: boolean
  handleOpen: () => void
  children: ReactNode
  placement?: string
}

export default function DrawerMobile ({ open, handleOpen, children, placement = 'bottom' }: DrawerMobileProps) {
  const currentSong = useCurrentSong(state => state.currentSong)
  const { data } = usePalette(currentSong?.song_cover.url ?? '#8a8b8b')
  const background = data.lightVibrant ?? '#8a8b8b'

  return (
    <Drawer
      placement={placement}
      className={`bg-[#141414] lg:hidden bg-gradient-to-b from-[${background}] to-[#141414]`}
      open={open}
      onClose={handleOpen}
      size={2000}
      transition={{
        type: 'spring',
        duration: 0.5
      }}
      placeholder=""
      onPointerEnterCapture={() => {
      }}
      onPointerLeaveCapture={() => {
      }}
    >
      <div style={{ background: `linear-gradient(180deg, ${background} -80%, #141414 90%)` }} className='flex flex-col w-full h-full'>
        <header className=' px-4 pt-3 flex justify-between items-center'>
          <button onClick={handleOpen} className='grid place-content-center'>
            <DownIcon className='size-7' />
          </button>
          <span className='text-xs font-normal text-center'>REPRODUCIENDO UNA CANCIÓN</span>
          <button onClick={handleOpen} className='grid place-content-center'>
            <DownIcon className='size-7' />
          </button>
        </header>
        <main className='flex flex-col h-full'>
          {children}
        </main>
      </div>
    </Drawer>
  )
}
