import { Outlet } from 'react-router-dom'
import '@fontsource-variable/outfit'
import './styles.css'
import Search from './components/Search'
import PlayList from './components/PlayList'
import { useState } from 'react'

export default function DashboardLayout () {
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => setCollapse(prev => !prev)
  return (
    <div className={`app bg-black grid text-white gap-2 p-4 ${collapse ? 'grid-cols-collapse' : 'grid-cols-no-collapse'}`}>
      <Search />
      <PlayList collapse={collapse} handleCollapse={handleCollapse} />
      <main className='[grid-area:main] main bg-[#141414] rounded-xl'>
        <Outlet />
      </main>
      <footer className='[grid-area:footer] footer bg-[#141414] rounded-xl'>
        Este es el reproductor
      </footer>
    </div>
  )
}
