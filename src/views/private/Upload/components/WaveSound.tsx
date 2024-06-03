import { PauseIcon, PlayIcon } from '@/icons/icons.tsx'
import useWaveSound from '../hooks/useWaveSound'

export function WaveSounds ({ audioUrl }: { audioUrl: string }) {
  const { togglePlayPause, waveformRef, isPlaying } = useWaveSound({ audioUrl })
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-full flex flex-col gap-2 justify-center items-center'>
        <div className='w-full block' ref={waveformRef} />
        <button type='button' onClick={togglePlayPause} className='bg-white rounded-full p-1'>
          {isPlaying ? <PauseIcon className='text-black p-1' /> : <PlayIcon className='text-black p-1' />}
        </button>
      </div>
    </div>
  )
}
