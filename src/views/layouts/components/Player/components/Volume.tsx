import { Drawer, DrawerTrigger } from '@/components/ui/Drawer'
import { ToolTip } from '@/components/ui/ToolTip'
import { ListIcon, MutedIcon } from '@/icons/icons'
import DrawerContainer from '../../Drawer/Drawer'
import { Slider } from '@/components/ui/Slider'
import { ReactNode } from 'react'

type Props = {
  playing: boolean
  handleMuted: () => void
  handleVolume: (e: number[]) => void
  muted: boolean
  volume: number
  volumeStep: () => ReactNode
}

export function Volume ({ handleMuted, handleVolume, muted, volume, volumeStep, playing }: Props) {
  return (
    <div className="w-[270px] flex items-center gap-4 justify-center">
      <Drawer>
        <DrawerTrigger>
          <ToolTip text='Fila de canciones'>
            <ListIcon className='w-6 h-6 mt-[5px]' />
          </ToolTip>
        </DrawerTrigger>
        <DrawerContainer playing={playing} />
      </Drawer>
      <button onClick={handleMuted}>{muted ? <MutedIcon className='w-5 h-5' /> : volumeStep()}</button>
      <Slider onValueChange={handleVolume} value={[volume]} defaultValue={[0.25]} min={0} max={0.5} step={0.01} />
    </div>
  )
}
