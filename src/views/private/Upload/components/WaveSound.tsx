import WaveSurfer from 'wavesurfer.js'
import { useEffect, useRef, useState } from 'react'
import { PauseIcon, PlayIcon } from '@/icons/icons.tsx'

export function WaveSounds ({ audioUrl }: { audioUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const waveformRef = useRef<HTMLDivElement>(null)
  const wavesurferRef = useRef<WaveSurfer>()

  useEffect(() => {
    if (!waveformRef.current) return

    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'white',
      progressColor: '#16a34a'
    })

    wavesurferRef.current = wavesurfer
    wavesurfer.load(audioUrl)
    wavesurfer.play()
    wavesurfer.setVolume(0.1)
    return () => {
      wavesurfer.destroy()
    }
  }, [audioUrl])

  const togglePlayPause = () => {
    if (wavesurferRef.current) {
      if (isPlaying) {
        wavesurferRef.current.pause()
      } else {
        wavesurferRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full block' ref={waveformRef} />
        <button onClick={togglePlayPause} className='bg-white rounded-full p-1'>
          {isPlaying ? <PauseIcon className='text-black p-1' /> : <PlayIcon className='text-black p-1' />}
        </button>
      </div>
    </div>
  )
}
