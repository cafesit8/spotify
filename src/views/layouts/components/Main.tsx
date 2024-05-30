import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function Main () {
  return (
    <main className='[grid-area:main] main bg-[#141414] rounded-xl p-5 flex flex-col gap-3'>
      <NavBar />
      <Outlet />
    </main>
  )
}
