import { useUserInfo } from '@/store/userInfo'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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
  const user = useUserInfo(state => state.user)
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
  const userInfo = useUserInfo(state => state.user)

  function sendData (data: FormFields) {
    console.table(data)
  }

  return {
    userInfo,
    sendData,
    register,
    errors,
    isSubmitting,
    handleSubmit
  }
}
