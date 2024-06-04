import Loading from '@/views/public/Loading.tsx'
import Header from './components/Header.tsx'
import { Suspense, lazy } from 'react'
const Form = lazy(() => import('./components/Form.tsx'))

export default function UploadSong () {
  return (
    <section className="flex flex-col gap-7 overflow-y-auto">
      <Header />
      <Suspense fallback={<Loading transparent />}>
        <Form />
      </Suspense>
    </section>
  )
}
