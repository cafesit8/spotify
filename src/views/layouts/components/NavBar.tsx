import { Button } from '@/components/ui/Button'
import { useUserInfo } from '@/store/userInfo'

export default function NavBar () {
  const userInfo = useUserInfo((state) => state.user)
  return (
    <nav className='flex justify-between items-center'>
      <span className='font-semibold text-2xl'>{userInfo?.name}, Bienvenido a Spotify</span>
      <div className='flex gap-3'>
        <Button className='rounded-full px-5'>Subir Canción</Button>
        <button className='block w-9 h-9 rounded-full overflow-hidden hover:scale-105 duration-150'>
          <img className='w-full h-full object-cover' width={50} height={50} src={userInfo?.photo_profile} alt="" />
        </button>
      </div>
    </nav>
  )
}
