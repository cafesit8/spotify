import { Suspense, lazy } from 'react'
import Loading from '@/views/public/Loading'
import HeaderSkeleton from './Skeleton/HeaderSkeleton'
const Header = lazy(() => import('./Components/Header'))
const Ncs = lazy(() => import('./Sections/NCS/Ncs'))
const Anime = lazy(() => import('./Sections/Anime/Anime'))
const CncoSection = lazy(() => import('./Sections/CNCO/CncoSection'))
const SpidermanSection = lazy(() => import('./Sections/Spiderman/Spiderman'))
const AviciiSection = lazy(() => import('./Sections/Avicii/AviciiSection'))

export default function Dashboard () {
  return (
    <section className='relative z-10 w-full h-full overflow-y-auto flex flex-col gap-7'>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Loading transparent />}>
        <Ncs />
      </Suspense>
      <Suspense fallback={<Loading transparent />}>
        <SpidermanSection />
      </Suspense>
      <Suspense fallback={<Loading transparent />}>
        <Anime />
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
