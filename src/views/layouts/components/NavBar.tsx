import { Button } from '@/components/ui/Button'
import useNavBar from './hooks/useNavBar'
import TooltipButton from '@/components/ui/TooltipButton'
import { useNavigate } from 'react-router-dom'
import { LeftIcon, RightIcon, UserIcon } from '@/icons/icons'
import { ToolTip } from '@/components/ui/ToolTip'

export default function NavBar () {
  const { handleLogOut, userInfo } = useNavBar()
  const navigate = useNavigate()
  return (
    <nav className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <ToolTip text='Atrás'>
          <button onClick={() => navigate(-1)} className='text-white flex items-center bg-[#292929] rounded-full p-1'>
            <LeftIcon className='w-5 h-5' />
          </button>
        </ToolTip>
        <ToolTip text='Adelante'>
          <button onClick={() => navigate(+1)} className='text-white flex items-center bg-[#292929] rounded-full p-1'>
            <RightIcon className='w-5 h-5' />
          </button>
        </ToolTip>
        <span className='font-normal text-xl'>{userInfo?.name}, Bienvenido a Spotify 🙌</span>
      </div>
      <div className='flex gap-3 relative'>
        <Button onClick={() => navigate('/upload-song')} className='rounded-full px-5'>Subir Canción</Button>
        <TooltipButton className='border w-9 h-9 rounded-full overflow-hidden' tooltiName={userInfo?.username} name={<img className='w-full h-full object-cover' src={userInfo?.photo_profile.url} alt="" />}>
          <div className='flex flex-col'>
            <button onClick={() => navigate('/my-account')} className='hover:bg-[#303030] text-start p-2 font-normal text-sm flex gap-2'>
              <UserIcon className='w-5 h-5' />
              <span>Cuenta</span>
            </button>
            <button className='hover:bg-[#303030] text-start p-2 text-sm'>Opciones</button>
            <button onClick={handleLogOut} className='hover:bg-[#303030] text-start p-2 text-sm'>Salir</button>
          </div>
        </TooltipButton>
      </div>
    </nav>
  )
}
