import { Drawer, DrawerTrigger } from '@/components/ui/Drawer'
import { ToolTip } from '@/components/ui/ToolTip'
import { ListIcon, MutedIcon, NormalVolumenIcon } from '@/icons/icons'
import DrawerContainer from '../../Drawer/Drawer'
import { Slider } from '@/components/ui/Slider'
import React, { ReactNode } from 'react'

type Props = {
  handleMuted: () => void
  handleVolume: (e: number[]) => void
  volume: number
  volumeStep: () => ReactNode
  audioRef: React.RefObject<HTMLAudioElement> | null
}

export function Volume ({ handleMuted, handleVolume, volume, volumeStep, audioRef }: Props) {
  function renderIcon () {
    if (audioRef?.current == null) {
      return <NormalVolumenIcon className='w-6 h-6' />
    } else {
      return audioRef.current?.muted ? <MutedIcon className='w-6 h-6' /> : volumeStep()
    }
  }
  return (
    <div className="flex items-center gap-4 justify-end">
      <Drawer>
        <DrawerTrigger>
          <ToolTip text='Fila de canciones'>
            <ListIcon className='w-6 h-6 mt-[5px]' />
          </ToolTip>
        </DrawerTrigger>
        <DrawerContainer />
      </Drawer>
      <button onClick={handleMuted}>
        {renderIcon()}
      </button>
      <Slider className='w-[150px]' onValueChange={handleVolume} value={[volume]} defaultValue={[0.25]} min={0} max={0.5} step={0.01} />
    </div>
  )
}
