import { useUserInfo } from '@/store/userInfo'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export default function useNavBar () {
  const userInfo = useUserInfo((state) => state.user)
  const navigate = useNavigate()
  async function handleLogOut () {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('currentSong')
    localStorage.removeItem('currentSongIndex')
    localStorage.removeItem('playList')
    toast.success('Adiós, Vuelve Pronto...')
    navigate('/login')
  }

  return {
    userInfo,
    handleLogOut,
    navigate
  }
}
