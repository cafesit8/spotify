import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import logo from '@/img/Spotify_Primary_Logo_RGB_White.png'
import { logIn } from '@/services/logIn'
import { useUserInfo } from '@/store/userInfo'
import '@fontsource-variable/outfit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email({ message: 'Debe ser un email valido' }).max(100),
  password: z.string().min(8, { message: 'Debe ser de 8 caracteres' })
})
type FormFields = z.infer<typeof schema>
export default function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
    resolver: zodResolver(schema)
  })
  const setUserInfo = useUserInfo((state) => state.setUser)
  const navigate = useNavigate()
  function sendData (data: FormFields) {
    toast.promise(logIn(data), {
      loading: 'Cargando...',
      success: (info) => {
        setUserInfo(info)
        navigate('/dashboard')
        return 'Sesión Iniciada'
      },
      error: 'Error al iniciar sesión'
    })
  }
  return (
    <main className="w-full min-h-screen bg-black grid place-content-center text-white">
      <form onSubmit={handleSubmit(sendData)} className="bg-[#242424] w-[400px] p-4 rounded-lg flex flex-col gap-4">
        <img className='w-[100px] m-auto' src={logo} alt="logo de spotify" title='logo de spotify' />
        <h1 className='m-auto text-2xl font-semibold'>Login</h1>
        <Input placeholder="example@example.com" label='Correo' name='email' errors={errors} register={register} />
        <Input type='password' placeholder="************" label='Contraseña' name='password' errors={errors} register={register} />
        <Button type='submit' variant={'default'}>Iniciar</Button>
        <Button onClick={() => navigate('/register')} type='button' variant={'outline'}>Regístrate</Button>
      </form>
    </main>
  )
}
