import { Music } from '@/types/musicList'
import Row from './Row'

type Props = {
  collapse?: boolean
  musicFiltered?: Music[]
}

export default function Table ({ collapse, musicFiltered }: Props) {
  return (
    <table className='w-full'>
      <thead>
        {collapse && (
          <tr>
            <th className='font-normal text-xs text-white/70 text-start'>Título</th>
            <th className='font-normal text-xs text-white/70'>Fecha lanzamiento</th>
            <th className='font-normal text-xs text-white/70'>Publicado por</th>
          </tr>
        )}
      </thead>
      <tbody>
        {musicFiltered?.map(song => (
          <Row key={song.id} collapse={collapse} song={song} />
        ))}
      </tbody>
    </table>
  )
}
