import '@fontsource-variable/outfit'
import './styles.css'
import { Suspense, lazy, useState } from 'react'
import MainSkeleton from './skeletons/MainSkeleton'
import PlayerSkeleton from './skeletons/PlayerSkeleton'
import PlayerContext from './context/PlayerContext'
const SearchItem = lazy(() => import('./components/SearchSection/Search'))
const Player = lazy(() => import('./components/Player/Player'))
const PlayList = lazy(() => import('./components/PlayList/PlayList'))
const Main = lazy(() => import('./components/Main/Main'))

export default function DashboardLayout () {
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => setCollapse(prev => !prev)
  return (
    <div className={`app bg-black grid h-dvh text-white gap-2 p-4 ${collapse ? 'grid-cols-collapse' : 'grid-cols-no-collapse'}`}>
      <Suspense fallback={<MainSkeleton />}>
        <Main />
      </Suspense>
      <Suspense fallback={<PlayerSkeleton />}>
        <PlayerContext>
          <Player />
        </PlayerContext>
      </Suspense>
      <Suspense fallback={null}>
        <SearchItem />
      </Suspense>
      <Suspense fallback={null}>
        <PlayList collapse={collapse} handleCollapse={handleCollapse} />
      </Suspense>
    </div>
  )
}
