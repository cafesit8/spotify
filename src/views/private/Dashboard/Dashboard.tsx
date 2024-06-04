import { Suspense, lazy } from 'react'
import Header from './Components/Header'
import Loading from '@/views/public/Loading'
const CncoSection = lazy(() => import('./Sections/CNCO/CncoSection'))
const SpidermanSection = lazy(() => import('./Sections/Spiderman/Spiderman'))
const AviciiSection = lazy(() => import('./Sections/Avicii/AviciiSection'))

export default function Dashboard () {
  return (
    <section className='relative z-10 w-full h-full overflow-y-auto flex flex-col gap-7'>
      <Header />
      <Suspense fallback={<Loading transparent />}>
        <SpidermanSection />
      </Suspense>
      <Suspense fallback={<Loading transparent />}>
        <AviciiSection />
      </Suspense>
      <Suspense fallback={<Loading transparent />}>
        <CncoSection />
      </Suspense>
    </section>
  )
}
