import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'

export default function useWaveSound ({ audioUrl }: { audioUrl: string }) {
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
  return {
    togglePlayPause,
    waveformRef,
    isPlaying
  }
}
