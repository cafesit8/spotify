import usePlayer from '../hooks/usePlayer'
import { Controls } from './components/Controls'
import { Info } from './components/Info'
import { Volume } from './components/Volume'

export default function Player () {
  const { audioRef, currentSong, handleMuted, handlePlay, handleVolume, currentTime, muted, playing, volume, volumeStep, repeatPlayList, handleRepeat, nextSong, prevSong } = usePlayer()
  return (
    <footer className='[grid-area:footer] footer bg-[#141414] rounded-xl flex justify-between p-3 gap-3'>
      <Info info={currentSong!} />
      <Controls audioRef={audioRef} nextSong={nextSong} prevSong={prevSong} repeatPlayList={repeatPlayList} handleRepeat={handleRepeat} currentTime={currentTime} handlePlay={handlePlay} info={currentSong} playing={playing} />
      <Volume handleMuted={handleMuted} playing={playing} handleVolume={handleVolume} muted={muted} volume={volume} volumeStep={volumeStep} />
    </footer>
  )
}
