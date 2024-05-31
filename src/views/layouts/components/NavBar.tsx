import { Button } from '@/components/ui/Button'
import useNavBar from './hooks/useNavBar'
import TooltipButton from '@/components/ui/TooltipButton'

export default function NavBar () {
  const { handleLogOut, userInfo, navigate } = useNavBar()
  return (
    <nav className='flex justify-between items-center'>
      <span className='font-normal text-2xl'>{userInfo?.name}, Bienvenido a Spotify 🙌</span>
      <div className='flex gap-3 relative'>
        <Button onClick={() => navigate('/dashboard/upload-song')} className='rounded-full px-5'>Subir Canción</Button>
        <TooltipButton className='border w-9 h-9 rounded-full overflow-hidden' tooltiName={userInfo?.username} name={<img className='w-full h-full object-cover' src={userInfo?.photo_profile.url} alt="" />}>
          <button className='hover:bg-[#303030] text-start p-2 text-sm'>Cuenta</button>
          <button className='hover:bg-[#303030] text-start p-2 text-sm'>Opciones</button>
          <button onClick={handleLogOut} className='hover:bg-[#303030] text-start p-2 text-sm'>Salir</button>
        </TooltipButton>
      </div>
    </nav>
  )
}
