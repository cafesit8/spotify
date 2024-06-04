import { Music } from '@/types/musicList'
import { useEffect, useState } from 'react'
import Card from './components/Card'

export default function AviciiSection () {
  const [playList, setPlayList] = useState<Music[]>([])
  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/665e4779e41b4d34e4fe1455', {
      method: 'GET',
      headers: {
        'X-ACCESS-KEY': '$2a$10$gHFKMHWcjObYBU7ccwXtre.bg5Q5VL/l118pNlvsd7qBJv1qe9Ol2'
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
      <h1 className='text-3xl'>Algunos de sus éxitos, Avicii</h1>
      <div className="grid gap-3 xl:[grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(170px,1fr))] sm:[grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] [grid-template-columns:repeat(auto-fit,minmax(70px,1fr))]">
        {playList?.map(song => (
          <Card key={song.id} song={song} />
        ))}
      </div>
    </section>
  )
}
