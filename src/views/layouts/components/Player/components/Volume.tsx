import { Drawer, DrawerTrigger } from '@/components/ui/Drawer'
import { ToolTip } from '@/components/ui/ToolTip'
import { ListIcon, MutedIcon, NormalVolumenIcon } from '@/icons/icons'
import { Slider } from '@/components/ui/Slider'
import { Suspense } from 'react'
import Header from '../../Drawer/components/Header'
import Buttons from '../../Drawer/components/Buttons'
import Table from '../../Drawer/components/Table'
import DrawerContainer from '../../Drawer/DrawerContainer'
import { useContextPlayer } from '@/views/layouts/context/PlayerContext'

export default function Volume () {
  const { handleMuted, handleVolume, volume, volumeStep, audioRef } = useContextPlayer()
  function renderIcon () {
    if (audioRef?.current == null) {
      return <NormalVolumenIcon className='w-6 h-6' />
    } else {
      return audioRef.current?.muted ? <MutedIcon className='w-6 h-6' /> : volumeStep()
    }
  }
  return (
    <div className="lg:flex hidden items-center gap-4 justify-end">
      <Drawer>
        <DrawerTrigger>
          <ToolTip text='Fila de canciones'>
            <ListIcon className='w-6 h-6 mt-[5px]' />
          </ToolTip>
        </DrawerTrigger>
        <DrawerContainer>
          <main className='lg:w-[1300px] w-full m-auto h-full p-3 flex flex-col gap-6 overflow-y-auto'>
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
        </DrawerContainer>
      </Drawer>
      <button onClick={handleMuted}>
        {renderIcon()}
      </button>
      <Slider className='w-[150px]' onValueChange={handleVolume} value={[volume]} defaultValue={[0.5]} min={0} max={1} step={0.01} />
    </div>
  )
}
