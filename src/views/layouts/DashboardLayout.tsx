import '@fontsource-variable/outfit'
import './styles.css'
import { Suspense, lazy, useEffect, useState } from 'react'
import MainSkeleton from './skeletons/MainSkeleton'
import PlayerSkeleton from './skeletons/PlayerSkeleton'
import PlayerContext from './context/PlayerContext'
import SearchSkeleton from './skeletons/SearchSkeleton'
const SearchItem = lazy(() => import('./components/SearchSection/Search'))
const Player = lazy(() => import('./components/Player/Player'))
const PlayList = lazy(() => import('./components/PlayList/PlayList'))
const Main = lazy(() => import('./components/Main/Main'))

function useIsMobile () {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 1125)
    }

    window.addEventListener('resize', updateIsMobile)
    updateIsMobile()

    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

  return isMobile
}

export default function DashboardLayout () {
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => setCollapse(prev => !prev)
  const isMobile = useIsMobile()
  return (
    <div className={`app bg-black grid h-dvh text-white lg:gap-2 lg:p-4 p-0 ${collapse ? 'grid-cols-collapse' : 'grid-cols-no-collapse'}`}>
      <Suspense fallback={<MainSkeleton />}>
        <Main />
      </Suspense>
      <Suspense fallback={<PlayerSkeleton />}>
        <PlayerContext>
          <Player />
        </PlayerContext>
      </Suspense>
      <Suspense fallback={<SearchSkeleton />}>
        <SearchItem />
      </Suspense>
      {!isMobile && <PlayList collapse={collapse} handleCollapse={handleCollapse} />}
    </div>
  )
}
