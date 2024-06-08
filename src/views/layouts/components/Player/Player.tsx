import { Suspense, lazy } from 'react'
const PlayerMobile = lazy(() => import('./PlayerMobile'))
const Controls = lazy(() => import('./components/Controls'))
const Info = lazy(() => import('./components/Info'))
const Volume = lazy(() => import('./components/Volume'))

export default function Player () {
  return (
    <footer className='footer [grid-area:footer] footer bg-[#141414] lg:rounded-xl rounded-md'>
      <div className='rounded-xl lg:flex items-center h-full hidden justify-between p-3 gap-3'>
        <Suspense fallback={null}>
          <Info />
        </Suspense>
        <Suspense fallback={null}>
          <Controls />
        </Suspense>
        <Suspense fallback={null}>
          <Volume />
        </Suspense>
      </div>
      <div className='lg:hidden flex items-center w-full h-full'>
        <Suspense fallback={null}>
          <PlayerMobile />
        </Suspense>
      </div>
    </footer>
  )
}
