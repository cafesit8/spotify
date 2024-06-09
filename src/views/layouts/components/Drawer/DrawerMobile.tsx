import { DownIcon } from '@/icons/icons'
import { ReactNode } from 'react'
import { Drawer as FlowDrawer } from 'flowbite-react'
import useDrawerMobile from './hooks/useDrawerMobile'

export type DrawerMobileProps = {
  open: boolean
  handleOpen: () => void
  children: ReactNode
}

export default function DrawerMobile ({ open, handleOpen, children }: DrawerMobileProps) {
  const background = useDrawerMobile()

  return (
    <FlowDrawer className='p-0 h-full' open={open} onClose={handleOpen} position={'bottom'}>
      <FlowDrawer.Items className='h-full'>
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
      </FlowDrawer.Items>
    </FlowDrawer>
  )
}
