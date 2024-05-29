import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import logo from '@/img/Spotify_Primary_Logo_RGB_White.png'
import '@fontsource-variable/outfit'
import { useNavigate } from 'react-router-dom'

export default function Login () {
  const navigate = useNavigate()
  return (
    <main className="w-full min-h-screen bg-black grid place-content-center text-white">
      <form className="bg-[#242424] w-[400px] p-4 rounded-lg flex flex-col gap-4">
        <img className='w-[100px] m-auto' src={logo} alt="logo de spotify" title='logo de spotify' />
        <h1 className='m-auto text-2xl font-semibold'>Login</h1>
        <label>
          Correo
          <Input placeholder="example@example.com" />
        </label>
        <label>
          Contraseña
          <Input placeholder="example@example.com" type='password' />
        </label>
        <Button variant={'default'}>Iniciar</Button>
        <Button onClick={() => navigate('/register')} type='button' variant={'outline'}>Regístrate</Button>
      </form>
    </main>
  )
}
