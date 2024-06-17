import { API_URL } from '@/config'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

export default function PlayList () {
  const [searchParams] = useSearchParams()
  const song = searchParams.get('song')?.toString()

  useEffect(() => {
      fetch(`${API_URL}/songs/search/${song}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(() => toast.error('Hubo un error al cargar las canciones'))
  }, [song])

  return (
    <section>
      {song}
    </section>
  )
}
