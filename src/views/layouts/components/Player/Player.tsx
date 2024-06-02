import usePlayer from '../hooks/usePlayer'
import { Controls } from './components/Controls'
import { Info } from './components/Info'
import { Volume } from './components/Volume'

export default function Player () {
  const { audioRef, currentSong, handleMuted, handleVolume, currentTime, playing, volume, volumeStep, repeatPlayList, handleRepeat, nextSong, prevSong } = usePlayer()
  return (
    <footer className='[grid-area:footer] footer bg-[#141414] rounded-xl flex justify-between p-3 gap-3'>
      <Info info={currentSong!} />
      <Controls audioRef={audioRef} nextSong={nextSong} prevSong={prevSong} repeatPlayList={repeatPlayList} handleRepeat={handleRepeat} currentTime={currentTime} info={currentSong} playing={playing} />
      <Volume audioRef={audioRef} handleMuted={handleMuted} handleVolume={handleVolume} volume={volume} volumeStep={volumeStep} />
    </footer>
  )
}
