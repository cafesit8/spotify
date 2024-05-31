import { useUserInfo } from '@/store/userInfo'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export default function useNavBar () {
  const userInfo = useUserInfo((state) => state.user)
  const navigate = useNavigate()
  async function handleLogOut () {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('currentMusicInfo')
    toast.success('Sesión cerrada correctamente')
    navigate('/login')
  }

  return {
    userInfo,
    handleLogOut,
    navigate
  }
}
