import { ListIcon, MutedIcon, NextIcon, PauseIcon, PlayIcon, PreviousIcon, RandomIcon, RepeatPlayListIcon, RepeatSongIcon } from '@/icons/icons'
import { convertDate } from '@/services/converDates'
import { formatTime } from '@/services/formaCurrentTime'
import usePlayer from './hooks/usePlayer'
import { Music } from '@/types/musicList'
import { useCurrentMusicInfo } from '@/store/currentPlayList'
import { Drawer, DrawerTrigger } from '@/components/ui/Drawer'
import { ToolTip } from '@/components/ui/ToolTip'
import { Slider } from '@/components/ui/Slider'
import DrawerContainer from './Drawer/Drawer'

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

function Volume ({ handleMuted, handleVolume, muted, volume, volumeStep, playing }: any) {
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

function Controls ({ audioRef, currentTime, handlePlay, info, playing, repeatPlayList, handleRepeat, nextSong, prevSong }: any) {
  const handleRandomPlayList = useCurrentMusicInfo(state => state.shufflePlayList)
  const handleRandom = () => handleRandomPlayList()
  function handleChange (e: number[]) {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(e[0].toString())
    }
  }
  return (
    <div className="flex-1 max-w-[480px] mx-auto text-center flex flex-col items-center gap-5 justify-center">
      <div className='flex gap-4'>
        {repeatPlayList
          ? (<ToolTip text='Repetir la lista'>
            <button onClick={handleRepeat}>
              <RepeatPlayListIcon className='text-white w-7 h-7' />
            </button>
          </ToolTip>)
          : (
            <ToolTip text='Repetir canción en bucle'>
              <button onClick={handleRepeat}>
                <RepeatSongIcon className='text-white w-7 h-7' />
              </button>
            </ToolTip>
          )
        }
        <ToolTip text='Canción Anterior'>
          <button onClick={prevSong}>
            <PreviousIcon className='text-white/80 hover:text-white w-7 h-7' />
          </button>
        </ToolTip>
        <button onClick={handlePlay} className='bg-white hover:scale-105 duration-150 rounded-full w-9 h-9 grid place-content-center'>
          {!playing ? <PlayIcon className='text-black' /> : <PauseIcon className='text-black' />}
        </button>
        <ToolTip text='Siguiente Canción'>
          <button onClick={nextSong}>
            <NextIcon className='text-white/80 hover:text-white w-7 h-7' />
          </button>
        </ToolTip>
        <button onClick={handleRandom}>
          <RandomIcon className='duration-150 w-7 h-7' />
        </button>
      </div>
      <div className='flex gap-2 items-center'>
        <span className='text-xs w-9'>{formatTime(currentTime)}</span>
        <Slider className='w-[480px]' onValueChange={handleChange} value={[currentTime]} defaultValue={[0.05]} min={0} max={audioRef.current?.duration} step={0.01} />
        <span className='text-xs w-9'>{audioRef.current && formatTime(audioRef.current?.duration)}</span>
      </div>
      <audio ref={audioRef} src={info?.song_mp3.url}></audio>
    </div >
  )
}

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
