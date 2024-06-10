import { Slider } from '@/components/ui/Slider'
import { ToolTip } from '@/components/ui/ToolTip'
import { ListIcon, NextIcon, PauseIcon, PlayIcon, PreviousIcon, RandomIcon, RepeatPlayListIcon, RepeatSongIcon } from '@/icons/icons'
import { formatTime } from '@/services/formaCurrentTime'
import { useCurrentSong } from '@/store/currentSong'
import { useContextPlayer } from '../../../context/PlayerContext'
import { Drawer, DrawerTrigger } from '@/components/ui/Drawer'
import DrawerContainer from '../../Drawer/DrawerContainer'
import DrawerContentMobile from './DrawerContentMobile'

export default function Controls () {
  const { audioRef, currentTime, repeatPlayList, handleRepeat, nextSong, prevSong } = useContextPlayer()
  const { playing, setPlaying, currentSong } = useCurrentSong(state => state)
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
    <div className="lg:flex-1 w-full mx-auto text-center flex lg:flex-col flex-col-reverse items-center lg:gap-5 gap-3 lg:p-0 pb-8 p-4 justify-center">
      <div className='flex flex-row gap-4 justify-center items-center w-full'>
        {repeatPlayList
          ? (<ToolTip text='Repetir la lista'>
            <button aria-label='Repetir lista de reproducción' className='flex justify-center items-center' onClick={handleRepeat}>
              <RepeatPlayListIcon className='text-white w-7 h-7' />
            </button>
          </ToolTip>)
          : (<ToolTip text='Repetir canción en bucle'>
            <button aria-label='Repetir la misma canción' className='flex justify-center items-center' onClick={handleRepeat}>
              <RepeatSongIcon className='text-white w-7 h-7' />
            </button>
          </ToolTip>)
        }
        <div className='flex lg:gap-4 gap-7 flex-1 lg:flex-none justify-center'>
          <ToolTip text='Canción Anterior'>
            <button aria-label='Reproducir la canción anterior' className='grid place-content-center' onClick={prevSong}>
              <PreviousIcon className='lg:text-white/80 text-white hover:text-white w-7 h-7' />
            </button>
          </ToolTip>
          <button aria-label={`${playing ? 'Pausar Canción' : 'Reproducir Canción'}`} onClick={handlePlay} className='bg-white hover:scale-105 duration-150 rounded-full lg:w-9 w-11 h-11 lg:h-9 grid place-content-center'>
            {playing ? <PauseIcon className='text-black' /> : <PlayIcon className='text-black' />}
          </button>
          <ToolTip text='Siguiente Canción'>
            <button aria-label='Reproducir la siguiente cancion' className='grid place-content-center' onClick={nextSong}>
              <NextIcon className='lg:text-white/80 text-white hover:text-white w-7 h-7' />
            </button>
          </ToolTip>
        </div>
        <div className='grid place-content-center'>
          <RandomIcon className='duration-150 w-7 h-7 hidden lg:block' />
          <Drawer>
            <DrawerTrigger aria-label='Abrir reproductor'>
              <ListIcon className='duration-150 w-7 h-7 lg:hidden block' />
            </DrawerTrigger>
            <DrawerContainer isMobile>
              <DrawerContentMobile />
            </DrawerContainer>
          </Drawer>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col gap-2 items-center w-full justify-center'>
        <span className='lg:block hidden text-xs w-9'>{formatTime(currentTime)}</span>
        <Slider className='lg:flex hidden lg:w-[450px] w-full' onValueChange={handleChange} value={[currentTime]} defaultValue={[0.05]} min={0} max={audioRef.current?.duration} step={0.01} />
        <span className='lg:block hidden text-xs w-9'>{formatTime(audioRef.current?.duration)}</span>
        <div className='w-full flex lg:hidden flex-col items-start px-1'>
          <p className='font-light text-white text-lg truncate'>{currentSong?.name || 'Título de la canción'}</p>
          <p className='font-light text-white/80 text-sm truncate mb-1'>{currentSong?.artist || 'Nombre del artista'}</p>
        </div>
        <div className='lg:hidden w-full px-1'>
          <Slider className='w-full' onValueChange={handleChange} value={[currentTime]} defaultValue={[0.05]} min={0} max={audioRef.current?.duration} step={0.01} />
        </div>
        <div className='lg:hidden w-full flex justify-between'>
          <span className='text-xs w-9'>{formatTime(currentTime)}</span>
          <span className='text-xs w-9'>{formatTime(audioRef.current?.duration)}</span>
        </div>
      </div>
      <audio ref={audioRef} src={currentSong?.song_mp3.url}></audio>
    </div >
  )
}
