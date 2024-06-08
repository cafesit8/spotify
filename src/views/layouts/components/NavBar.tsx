import { Button } from '@/components/ui/Button'
import useNavBar from './hooks/useNavBar'
import TooltipButton from '@/components/ui/TooltipButton'
import { useNavigate } from 'react-router-dom'
import { LeftIcon, RightIcon, SearchIcon, UserIcon } from '@/icons/icons'
import { ToolTip } from '@/components/ui/ToolTip'

export default function NavBar () {
  const { handleLogOut, userInfo } = useNavBar()
  const navigate = useNavigate()
  return (
    <nav className='flex justify-between items-center'>
      <div className='lg:flex hidden items-center gap-2'>
        <ToolTip text='Atrás'>
          <button aria-label='Back' onClick={() => navigate(-1)} className='text-white flex items-center bg-[#292929] rounded-full p-1'>
            <LeftIcon className='w-5 h-5' />
          </button>
        </ToolTip>
        <ToolTip text='Adelante'>
          <button aria-label='Next' onClick={() => navigate(+1)} className='text-white flex items-center bg-[#292929] rounded-full p-1'>
            <RightIcon className='w-5 h-5' />
          </button>
        </ToolTip>
        <span className='font-normal text-xl ml-1'>{userInfo?.name}, Bienvenido a Spotify 🙌</span>
      </div>
      <div className='flex items-center gap-3 relative lg:w-auto w-full justify-between lg:justify-normal'>
        <Button onClick={() => navigate('/upload-song')} className='rounded-full px-5'>Publicar Canción</Button>
        <div className='flex items-center gap-3'>
          <button className='block lg:hidden' onClick={() => navigate('/search')}>
            <SearchIcon className='w-6 h-6' />
          </button>
          <TooltipButton className='border w-9 h-9 rounded-full overflow-hidden' tooltiName={userInfo?.username} name={<img className='lg:w-full lg:h-full w-9 h-9 rounded-full lg:rounded-none object-cover' src={userInfo?.photo_profile?.url || 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'} alt="avatar del usuario" />}>
            <div className='flex flex-col'>
              <button aria-label='account' onClick={() => navigate('/my-account')} className='hover:bg-[#303030] text-start p-2 font-normal text-sm flex gap-2'>
                <UserIcon className='w-5 h-5' />
                <span>Cuenta</span>
              </button>
              <button aria-label='options' className='hover:bg-[#303030] text-start p-2 text-sm'>Opciones</button>
              <button aria-label='logout' onClick={handleLogOut} className='hover:bg-[#303030] text-start p-2 text-sm'>Salir</button>
            </div>
          </TooltipButton>
        </div>
      </div>
    </nav>
  )
}
