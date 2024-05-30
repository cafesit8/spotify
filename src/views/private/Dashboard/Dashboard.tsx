import { useUserInfo } from '@/store/userInfo'

export default function Dashboard () {
  const userInfo = useUserInfo((state) => state.user)
  return (
    <section className='w-full h-full p-4'>
      Bienvenido {userInfo?.name}
    </section>
  )
}
