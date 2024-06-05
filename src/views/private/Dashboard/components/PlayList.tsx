import { Music } from '@/types/musicList'
import { useEffect, useState } from 'react'
import Card from './Card'
import Skeleton from './Skeleton'

export default function PlayList ({ url, subtitle }: { url: string, subtitle: string }) {
  const [playList, setPlayList] = useState<Music[]>([])
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'X-ACCESS-KEY': '$2a$10$VkF6Qg0srlDuf7qTxlQ9WenxQON0HRRNbMa9tpOgk9xEo65Ad2rim'
      }
    })
      .then(res => res.json())
      .then(result => {
        const data = result.record
        setPlayList(data.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <section className='flex flex-col gap-2'>
      {playList.length > 0 && <h3 className="text-3xl text-white/90">{subtitle}</h3>}
      {playList.length > 0
        ? <div className="grid gap-3 xl:[grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(170px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(120px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(70px,1fr))]">
          {playList?.map(song => (
            <Card key={song.id} song={song} />
          ))}
        </div>
        : <Skeleton />}
    </section>
  )
}
