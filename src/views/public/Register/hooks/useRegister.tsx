import { uploadImage } from '@/services/uploadImage'
import { ChangeEvent, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUser } from '@/services/createUser'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const STATUS = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error'
} as const

const schema = z.object({
  name: z.string().min(1, { message: 'Este campo es requerido' }).max(20, { message: 'Maximo 45 caracteres' }),
  surname: z.string().min(1, { message: 'Este campo es requerido' }).max(50, { message: 'Maximo 50 caracteres' }),
  username: z.string().min(1, { message: 'Este campo es requerido' }).max(20, { message: 'Maximo 45 caracteres' }),
  url: z.string().min(1, { message: 'Debe subir una imagen' }),
  email: z.string().email({ message: 'Debe ser un email valido' }).max(100),
  password: z.string().min(8, { message: 'Debe ser de 8 caracteres' }).max(8, { message: 'Debe ser de 8 caracteres' })
})

type FormFields = z.infer<typeof schema>

type StatusProps = typeof STATUS[keyof typeof STATUS]
export default function useRegister () {
  const [status, setStatus] = useState<StatusProps>(STATUS.IDLE)
  const [photo, setPhoto] = useState<null | string>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<FormFields>({
    resolver: zodResolver(schema)
  })
  const navigate = useNavigate()
  async function handleFileChange (event: ChangeEvent<HTMLInputElement>) {
    const formData = new FormData()
    const file = event.currentTarget.files?.[0]

    if (file) {
      setStatus(STATUS.SUBMITTING)
      formData.append('file', file)
      formData.append('upload_preset', 'nofirma')
      formData.append('folder', 'spotify/users')
      const response = await uploadImage(formData)

      if (response.secure_url) {
        setPhoto(response.secure_url)
        setValue('url', response.secure_url)
        setStatus(STATUS.SUCCESS)
      } else {
        setStatus(STATUS.ERROR)
      }
    }
  }

  const formatDateToTimestamp = (date: Date) => {
    const pad = (n: number) => n < 10 ? '0' + n : n
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
      `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  }

  const sendData: SubmitHandler<FormFields> = async (data) => {
    const date = formatDateToTimestamp(new Date())
    const dataToSend = { ...data, created_at: date }
    try {
      toast.promise(createUser(dataToSend), {
        loading: 'Creando usuario...',
        success: 'Usuario creado correctamente',
        error: 'Error al crear usuario'
      })
      navigate('/dashboard')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return {
    status,
    photo,
    handleFileChange,
    STATUS,
    register,
    errors,
    handleSubmit,
    isSubmitting,
    sendData
  }
}
