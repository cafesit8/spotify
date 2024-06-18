import { API_URL } from '@/config'
import { Music } from '@/types/musicList'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

export default function usePlayList () {
  const [songList, setSongList] = useState<Music[]>([])
  const [searchParams] = useSearchParams()
  const song = searchParams.get('song')?.toString()

  useEffect(() => {
    fetch(`${API_URL}/songs/search/${song}`)
      .then(res => res.json())
      .then(data => setSongList(data.data))
      .catch(() => toast.error('Hubo un error al cargar las canciones'))
  }, [song])

  return {
    song,
    songList
  }
}
