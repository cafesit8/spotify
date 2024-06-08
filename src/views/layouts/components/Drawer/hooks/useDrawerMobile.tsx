import { useCurrentSong } from '@/store/currentSong'
import { usePalette } from 'react-palette'

export default function useDrawerMobile () {
  const currentSong = useCurrentSong(state => state.currentSong)
  const { data } = usePalette(currentSong?.song_cover.url ?? '#8a8b8b')
  const background = data.lightVibrant ?? '#8a8b8b'

  return background
}
