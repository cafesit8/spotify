import { MutedIcon, NextIcon, PauseIcon, PlayIcon, PreviousIcon, RandomIcon, RepeatPlayListIcon, RepeatSongIcon } from '@/icons/icons'
import { convertDate } from '@/services/converDates'
import { formatTime } from '@/services/formaCurrentTime'
import usePlayer from './hooks/usePlayer'
import { Music } from '@/types/musicList'
import { useCurrentMusicInfo } from '@/store/currentPlayList'

function Info ({ info }: { info: Music }) {
  return (
    <div className="w-[270px]">
      <article className='flex items-center gap-4 rounded-lg'>
        <picture className='w-28 h-28 overflow-hidden block rounded-md'>
          <img className='w-full h-full object-cover' src={info?.song_cover.url} alt="" />
        </picture>
        <div>
          <h5 className='font-light text-white text-base'>{info?.name}</h5>
          <h6 className='font-light text-white/80 text-sm'>{info?.artist}</h6>
          <h6 className='font-light text-white/80 text-sm'>{info?.realease_date && convertDate(info?.realease_date)}</h6>
        </div>
      </article>
    </div>
  )
}

function Volume ({ handleMuted, handleVolume, muted, volume, volumeStep }: any) {
  return (
    <div className="w-[270px] flex items-center gap-4 justify-center">
      <button onClick={handleMuted}>{muted ? <MutedIcon className='w-5 h-5' /> : volumeStep()}</button>
      <input onChange={handleVolume} value={volume} className='w-full' max={1} min={0} step={0.01} type="range" />
    </div>
  )
}

function Controls ({ audioRef, currentTime, handlePlay, info, playing, repeatPlayList, handleRepeat }: any) {
  const handleRandomPlayList = useCurrentMusicInfo(state => state.shufflePlayList)
  const handleRandom = () => handleRandomPlayList()
  return (
    <div className="flex-1 max-w-[480px] mx-auto text-center flex flex-col items-center gap-5 justify-center">
      <div className='flex gap-4'>
        {repeatPlayList
          ? <button onClick={handleRepeat}>
            <RepeatPlayListIcon className='text-white w-7 h-7' />
          </button>
          : <button onClick={handleRepeat}>
            <RepeatSongIcon className='text-white w-7 h-7' />
          </button>}
        <button>
          <PreviousIcon className='text-white/80 hover:text-white w-7 h-7' />
        </button>
        <button onClick={handlePlay} className='bg-white hover:scale-105 duration-150 rounded-full w-9 h-9 grid place-content-center'>
          {playing ? <PauseIcon className='text-black' /> : <PlayIcon className='text-black' />}
        </button>
        <button>
          <NextIcon className='text-white/80 hover:text-white w-7 h-7' />
        </button>
        <button onClick={handleRandom}>
          <RandomIcon className='duration-150 w-7 h-7' />
        </button>
      </div>
      <div className='flex gap-2 items-center'>
        <span className='text-xs w-9'>{formatTime(currentTime)}</span>
        <input className='w-[450px]' type="range" value={currentTime} max={audioRef.current?.duration} onChange={(e) => {
          if (audioRef.current) {
            audioRef.current.currentTime = parseFloat(e.target.value)
          }
        }} />
        <span className='text-xs w-9'>{audioRef.current && formatTime(audioRef.current?.duration)}</span>
      </div>
      <audio ref={audioRef} src={info?.song_mp3.url}></audio>
    </div>
  )
}

export default function Player () {
  const { audioRef, currentSong, handleMuted, handlePlay, handleVolume, currentTime, muted, playing, volume, volumeStep, repeatPlayList, handleRepeat } = usePlayer()
  return (
    <footer className='[grid-area:footer] footer bg-[#141414] rounded-xl flex justify-between p-3 gap-3'>
      <Info info={currentSong!} />
      <Controls audioRef={audioRef} repeatPlayList={repeatPlayList} handleRepeat={handleRepeat} currentTime={currentTime} handlePlay={handlePlay} info={currentSong} playing={playing} />
      <Volume handleMuted={handleMuted} handleVolume={handleVolume} muted={muted} volume={volume} volumeStep={volumeStep} />
    </footer>
  )
}
