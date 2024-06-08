import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import './main.css'

export default function Main () {
  return (
    <main className='[grid-area:main] main relative bg-green-600 lg:rounded-xl rounded-none lg:p-5 p-2 pb-0 flex flex-col gap-3 overflow-hidden'>
      <NavBar />
      <Outlet />
    </main>
  )
}
