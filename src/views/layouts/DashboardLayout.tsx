import '@fontsource-variable/outfit'
import './styles.css'
import PlayList from './components/PlayList'
import { useState } from 'react'
import SearchItem from './components/Search'
import Player from './components/Player'
import Main from './components/Main'

export default function DashboardLayout () {
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => setCollapse(prev => !prev)
  return (
    <div className={`app bg-black grid text-white gap-2 p-4 ${collapse ? 'grid-cols-collapse' : 'grid-cols-no-collapse'}`}>
      <SearchItem />
      <PlayList collapse={collapse} handleCollapse={handleCollapse} />
      <Main />
      <Player />
    </div>
  )
}
