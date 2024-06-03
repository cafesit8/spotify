import { Slider } from '@/components/ui/Slider'
import { ToolTip } from '@/components/ui/ToolTip'
import { NextIcon, PauseIcon, PlayIcon, PreviousIcon, RandomIcon, RepeatPlayListIcon, RepeatSongIcon } from '@/icons/icons'
import { formatTime } from '@/services/formaCurrentTime'
import { useCurrentMusicInfo } from '@/store/currentPlayList'
import { useCurrentSong } from '@/store/currentSong'
import { Music } from '@/types/musicList'

type Props = {
  audioRef: any
  currentTime: number
  info: Music | null
  playing: boolean
  repeatPlayList: boolean
  handleRepeat: () => void
  nextSong: () => void
  prevSong: () => void
}

export function Controls ({ currentTime, info, repeatPlayList, handleRepeat, nextSong, prevSong, audioRef }: Props) {
  const handleRandomPlayList = useCurrentMusicInfo(state => state.shufflePlayList)
  const handleRandom = () => handleRandomPlayList()
  const { playing, setPlaying } = useCurrentSong()
  function handleChange (e: number[]) {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(e[0].toString())
    }
  }

  function handlePlay () {
    if (audioRef.current) {
      if (!playing) {
        setPlaying(true)
      } else {
        setPlaying(false)
      }
    }
  }
  return (
    <div className="flex-1 mx-auto text-center flex flex-col items-center gap-5 justify-center">
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
        <Slider className='w-[450px]' onValueChange={handleChange} value={[currentTime]} defaultValue={[0.05]} min={0} max={audioRef.current?.duration} step={0.01} />
        <span className='text-xs w-9'>{audioRef.current && formatTime(audioRef.current?.duration)}</span>
      </div>
      <audio ref={audioRef} src={info?.song_mp3.url}></audio>
    </div >
  )
}
