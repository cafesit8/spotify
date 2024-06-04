import { Suspense, lazy } from 'react'
import usePlayer from '../hooks/usePlayer'
import { Info } from './components/Info'
import { Volume } from './components/Volume'
const Controls = lazy(() => import('./components/Controls'))

export default function Player () {
  const { audioRef, currentSong, handleMuted, handleVolume, currentTime, playing, volume, volumeStep, repeatPlayList, handleRepeat, nextSong, prevSong } = usePlayer()
  return (
    <footer className='[grid-area:footer] footer bg-[#141414] rounded-xl flex justify-between p-3 gap-3'>
      <Info info={currentSong!} />
      <Suspense fallback={null}>
        <Controls audioRef={audioRef} nextSong={nextSong} prevSong={prevSong} repeatPlayList={repeatPlayList} handleRepeat={handleRepeat} currentTime={currentTime} info={currentSong} playing={playing} />
      </Suspense>
      <Volume audioRef={audioRef} handleMuted={handleMuted} handleVolume={handleVolume} volume={volume} volumeStep={volumeStep} />
    </footer>
  )
}
