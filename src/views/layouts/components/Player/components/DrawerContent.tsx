import { Suspense, lazy } from 'react'
const Buttons = lazy(() => import('../../Drawer/components/Buttons'))
const Header = lazy(() => import('../../Drawer/components/Header'))
const Table = lazy(() => import('../../Drawer/components/Table'))

export default function DrawerContent () {
  return (
    <main className='lg:w-[1300px] w-full m-auto h-full p-3 flex flex-col gap-6 overflow-y-auto'>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Suspense fallback={null}>
        <Buttons />
      </Suspense>
      <Suspense fallback={null}>
        <Table />
      </Suspense>
    </main>
  )
}
