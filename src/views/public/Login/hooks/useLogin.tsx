import { logIn } from '@/services/api/logIn'
import { useUserInfo } from '@/store/userInfo'
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
export default function useLogin () {
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
        return `Hola, ${info.data.username}`
      },
      error: 'Error al iniciar sesión'
    })
  }

  return {
    errors,
    register,
    handleSubmit,
    sendData,
    navigate
  }
}
