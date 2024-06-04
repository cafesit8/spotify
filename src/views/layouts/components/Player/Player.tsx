import { Suspense, lazy } from 'react'
import usePlayer from '../hooks/usePlayer'
const Controls = lazy(() => import('./components/Controls'))
const Info = lazy(() => import('./components/Info'))
const Volume = lazy(() => import('./components/Volume'))

export default function Player () {
  const { audioRef, handleMuted, handleVolume, currentTime, volume, volumeStep, repeatPlayList, handleRepeat, nextSong, prevSong } = usePlayer()
  return (
    <footer className='[grid-area:footer] footer bg-[#141414] rounded-xl flex justify-between p-3 gap-3'>
      <Suspense fallback={null}>
        <Info />
      </Suspense>
      <Suspense fallback={null}>
        <Controls audioRef={audioRef} nextSong={nextSong} prevSong={prevSong} repeatPlayList={repeatPlayList} handleRepeat={handleRepeat} currentTime={currentTime} />
      </Suspense>
      <Suspense fallback={null}>
        <Volume audioRef={audioRef} handleMuted={handleMuted} handleVolume={handleVolume} volume={volume} volumeStep={volumeStep} />
      </Suspense>
    </footer>
  )
}
