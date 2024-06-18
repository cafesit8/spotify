import { API_URL } from '@/config'
import { Music } from '@/types/musicList'
import Loading from '@/views/public/Loading'
import { Suspense, lazy, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
const CardSong = lazy(() => import('../Components/CardSong'))

export default function SongList () {
  const [songList, setSongList] = useState<Music[]>([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`${API_URL}/songs/categories/${id}`)
      .then(res => res.json())
      .then(data => setSongList(data.data))
      .catch(() => toast.error('Hubo un error al cargar las canciones'))
  }, [id])

  return (
    <section className='w-full h-full lg:pb-0 pb-3'>
      <div className='grid lg:gap-3 gap-2 lg:[grid-template-columns:repeat(auto-fill,minmax(170px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(120px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(100px,1fr))]'>
        {songList.map(song => (
          <Suspense fallback={<Loading transparent />}>
            <CardSong key={song.id} song={song} />
          </Suspense>
        ))}
      </div>
    </section>
  )
}
