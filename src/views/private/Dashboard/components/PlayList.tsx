import { Music } from '@/types/musicList'
import { useState } from 'react'
import Card from './Card'
import Skeleton from '../Skeleton/Skeleton'
import { useInView } from 'react-intersection-observer'
import { toast } from 'sonner'

export default function PlayList ({ url, subtitle }: { url: string, subtitle: string }) {
  const [playList, setPlayList] = useState<Music[]>([])
  const { ref } = useInView({
    threshold: 0.3,
    onChange (inView) {
      inView && getData()
    }
  })

  async function getData () {
    if (playList.length === 0) {
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'X-ACCESS-KEY': '$2a$10$VkF6Qg0srlDuf7qTxlQ9WenxQON0HRRNbMa9tpOgk9xEo65Ad2rim'
          }
        })
        if (!res.ok) {
          throw new Error('Error fetching music list')
        }
        const data = await res.json()
        setPlayList(data.record.data)
      } catch (error) {
        toast.error('Error al cargar las canciones')
      }
    }
  }

  return (
    <section ref={ref} className='flex flex-col gap-2'>
      {playList.length > 0 && <h3 className="lg:text-3xl text-xl text-white/90">{subtitle}</h3>}
      {playList.length > 0
        ? <div className="grid lg:gap-3 gap-2 xl:[grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(170px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(120px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(100px,1fr))]">
          {playList?.map(song => (
            <Card key={song.id} song={song} />
          ))}
        </div>
        : <Skeleton />}
    </section>
  )
}
