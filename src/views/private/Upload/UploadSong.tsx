import Loading from '@/views/public/Loading.tsx'
import { Suspense, lazy } from 'react'
const Form = lazy(() => import('./components/Form.tsx'))
const Header = lazy(() => import('./components/Header.tsx'))

export default function UploadSong () {
  return (
    <section className="flex flex-col gap-7 overflow-y-auto">
      <Suspense fallback={<Loading transparent />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Loading transparent />}>
        <Form />
      </Suspense>
    </section>
  )
}
