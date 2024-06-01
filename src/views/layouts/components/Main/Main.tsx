import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import './main.css'

export default function Main () {
  return (
    <main className='[grid-area:main] main relative bg-green-600 rounded-xl p-5 flex flex-col gap-3 overflow-hidden'>
      <NavBar />
      <Outlet />
    </main>
  )
}
