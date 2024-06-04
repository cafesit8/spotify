import '@fontsource-variable/outfit'
import './styles.css'
import { Suspense, lazy, useState } from 'react'
const SearchItem = lazy(() => import('./components/SearchSection/Search'))
const Player = lazy(() => import('./components/Player/Player'))
const PlayList = lazy(() => import('./components/PlayList/PlayList'))
const Main = lazy(() => import('./components/Main/Main'))

export default function DashboardLayout () {
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => setCollapse(prev => !prev)
  return (
    <div className={`app bg-black grid text-white gap-2 p-4 ${collapse ? 'grid-cols-collapse' : 'grid-cols-no-collapse'}`}>
      <Suspense fallback={null}>
        <SearchItem />
      </Suspense>
      <Suspense fallback={null}>
        <PlayList collapse={collapse} handleCollapse={handleCollapse} />
      </Suspense>
      <Suspense fallback={null}>
        <Main />
      </Suspense>
      <Suspense fallback={null}>
        <Player />
      </Suspense>
    </div>
  )
}
