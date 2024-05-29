import { Outlet } from 'react-router-dom'
import '@fontsource-variable/outfit'
import './styles.css'
import Search from './components/Search'

export default function DashboardLayout () {
  return (
    <div className="app bg-black grid text-white gap-2 p-4">
      <Search />
      <aside className='[grid-area:playlist] playlist bg-[#141414] rounded-xl'>
        Canciones del momento
      </aside>
      <main className='[grid-area:main] main bg-[#141414] rounded-xl'>
        <Outlet />
      </main>
      <footer className='[grid-area:footer] footer bg-[#141414] rounded-xl'>
        Este es el reproductor
      </footer>
    </div>
  )
}
