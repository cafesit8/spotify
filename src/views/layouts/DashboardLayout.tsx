import '@fontsource-variable/outfit'
import './styles.css'
import { Suspense, lazy, useState } from 'react'
import Loading from '../public/Loading'
const SearchItem = lazy(() => import('./components/SearchSection/Search'))
const Player = lazy(() => import('./components/Player/Player'))
const PlayList = lazy(() => import('./components/PlayList/PlayList'))
const Main = lazy(() => import('./components/Main/Main'))

export default function DashboardLayout () {
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => setCollapse(prev => !prev)
  return (
    <div className={`app bg-black grid text-white gap-2 p-4 ${collapse ? 'grid-cols-collapse' : 'grid-cols-no-collapse'}`}>
      <Suspense fallback={<Loading transparent />}>
        <SearchItem />
      </Suspense>
      <Suspense fallback={<Loading transparent />}>
        <PlayList collapse={collapse} handleCollapse={handleCollapse} />
      </Suspense>
      <Suspense fallback={<Loading transparent />}>
        <Main />
      </Suspense>
      <Suspense fallback={<Loading transparent />}>
        <Player />
      </Suspense>
    </div>
  )
}
