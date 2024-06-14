import { updateUser } from '@/services/api/updateUser'
import { useUserInfo } from '@/store/userInfo'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, { message: 'Este campo es requerido' }),
  surname: z.string().min(1, { message: 'Este campo es requerido' }),
  username: z.string().min(1, { message: 'Este campo es requerido' }),
  email: z.string().min(1, { message: 'Este campo es requerido' }),
  date: z.string().min(1, { message: 'Este campo es requerido' })
})

type FormFields = z.infer<typeof schema>

export default function useMyAccount () {
  const { user, setUser } = useUserInfo(state => state)
  const userInfo = useUserInfo(state => state)
  const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      name: user?.name,
      surname: user?.surname,
      username: user?.username,
      email: user?.email,
      date: user?.created_at.split(' ')[0]
    },
    resolver: zodResolver(schema)
  })

  async function sendData (data: FormFields) {
    try {
      const res = await updateUser(data, user?.id)
      if (res.data.id) {
        setUser({ data: res.data, access_token: userInfo.access_token, token_type: userInfo.token_type })
        toast.success('Usuario actualizado correctamente')
      }
    } catch (error) {
      toast.error('Error al actualizar el usuario')
    }
  }
  return {
    user,
    sendData,
    register,
    errors,
    isSubmitting,
    handleSubmit
  }
}
