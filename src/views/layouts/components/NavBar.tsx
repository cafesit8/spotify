import { Button } from '@/components/ui/Button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import useNavBar from './hooks/useNavBar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/ToolTip'

export default function NavBar () {
  const { handleLogOut, userInfo, navigate } = useNavBar()
  return (
    <nav className='flex justify-between items-center'>
      <span className='font-normal text-2xl'>{userInfo?.name}, Bienvenido a Spotify 🙌</span>
      <div className='flex gap-3 relative'>
        <Button onClick={() => navigate('/dashboard/upload-song')} className='rounded-full px-5'>Subir Canción</Button>
        <Popover>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <PopoverTrigger className='border w-9 h-9 rounded-full overflow-hidden hover:scale-105 duration-150'>
                  <img className='w-full h-full object-cover' src={userInfo?.photo_profile.url} alt="" />
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>{userInfo?.username}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <PopoverContent className='bg-[#1b1b1b] flex flex-col gap-1 text-white w-[150px] mr-12 mt-2 border-none p-2'>
            <button className='hover:bg-[#303030] text-start p-2 text-sm'>Cuenta</button>
            <button className='hover:bg-[#303030] text-start p-2 text-sm'>Opciones</button>
            <button onClick={handleLogOut} className='hover:bg-[#303030] text-start p-2 text-sm'>Salir</button>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}
