import { HouseIcon, SearchIcon } from '@/icons/icons'
import { NavLink } from 'react-router-dom'

export default function SearchItem () {
  return (
    <div className='[grid-area:search] bg-[#141414] rounded-xl p-5 lg:flex hidden items-center'>
      <ul className='flex flex-col gap-4'>
        <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-white flex gap-4 font-semibold' : 'text-white/70 flex gap-4 font-semibold'}><HouseIcon /> Inicio</NavLink></li>
        <li><NavLink to='/search' className={({ isActive }) => isActive ? 'text-white flex gap-4 font-semibold' : 'text-white/70 flex gap-4 font-semibold'}><SearchIcon /> Buscar</NavLink></li>
      </ul>
    </div>
  )
}
