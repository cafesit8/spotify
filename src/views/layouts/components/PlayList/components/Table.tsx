import { Music } from '@/types/musicList'
import { Suspense, lazy } from 'react'
const Row = lazy(() => import('./Row'))

type Props = {
  collapse?: boolean
  musicFiltered?: Music[]
}

export default function Table ({ collapse, musicFiltered }: Props) {
  console.log('table')
  return (
    <table className={`${collapse ? 'divide-y' : ''} w-full divide-white/40`}>
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
        <tr className='h-2'></tr>
        {musicFiltered?.map(song => (
          <Suspense fallback={null}>
            <Row key={song.id} collapse={collapse} song={song} />
          </Suspense>
        ))}
      </tbody>
    </table>
  )
}
