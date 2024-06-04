import { Suspense, lazy } from 'react'
import Header from './Components/Header'
import Loading from '@/views/public/Loading'
const AviciiSection = lazy(() => import('./Sections/Avicii/AviciiSection'))

export default function Dashboard () {
  return (
    <section className='relative z-10 w-full h-full overflow-y-auto flex flex-col gap-7'>
      <Header />
      <Suspense fallback={<Loading transparent />}>
        <AviciiSection />
      </Suspense>
    </section>
  )
}
