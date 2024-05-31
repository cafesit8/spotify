import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import logo from '@/img/Spotify_Primary_Logo_RGB_White.png'
import useLogin from './hooks/useLogin'
import '@fontsource-variable/outfit'

export default function Login () {
  const { handleSubmit, register, errors, sendData, navigate } = useLogin()
  return (
    <main className="w-full min-h-screen bg-black grid place-content-center text-white">
      <form onSubmit={handleSubmit(sendData)} className="bg-[#242424] w-[400px] p-4 rounded-lg flex flex-col gap-4">
        <img className='w-[100px] m-auto' src={logo} alt="logo de spotify" title='logo de spotify' />
        <h1 className='m-auto text-2xl font-semibold'>Inicio Sesión</h1>
        <Input placeholder="example@example.com" label='Correo' name='email' errors={errors} register={register} />
        <Input type='password' placeholder="************" label='Contraseña' name='password' errors={errors} register={register} />
        <Button type='submit' variant={'default'}>Iniciar</Button>
        <Button onClick={() => navigate('/register')} type='button' variant={'outline'}>Regístrate</Button>
      </form>
    </main>
  )
}
