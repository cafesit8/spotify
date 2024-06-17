import { Suspense, lazy } from 'react'
const Header = lazy(() => import('./Components/Header'))
const CategoryList = lazy(() => import('./Components/CategoryList'))
const PlayList = lazy(() => import('./Components/PlayList'))

export default function Search () {
  return (
    <section className='relative z-10 w-full h-full overflow-y-auto flex flex-col gap-7'>
      <Suspense fallback={null}>
        <Header />
        <PlayList />
        <CategoryList />
      </Suspense>
    </section>
  )
}
