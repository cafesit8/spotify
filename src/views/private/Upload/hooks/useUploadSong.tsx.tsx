import { createSong } from '@/services/api/createSong'
import { uploadImage } from '@/services/api/uploadImage'
import { useUserInfo } from '@/store/userInfo'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, { message: 'Este campo es requerido' }),
  artist: z.string().min(1, { message: 'Este campo es requerido' }),
  album: z.string().min(1, { message: 'Este campo es requerido' }),
  realease_date: z.string().min(1, { message: 'Debe seleccionar una fecha' }),
  duration: z.number(),
  url: z.string().min(1, { message: 'Debe subir una cancion' }),
  cover: z.string().min(1, { message: 'Debe subir una imagen' }),
  category_id: z.string().min(1, { message: 'Debe seleccionar una categoria' })
})

export type FormFields = z.infer<typeof schema>

export default function useUploadSong () {
  const [image, setImage] = useState()
  const [song, setSong] = useState()
  const { register, formState: { errors, isSubmitting }, setValue, handleSubmit, control } = useForm<FormFields>({
    resolver: zodResolver(schema)
  })
  const [loadingSong, setLoadingSong] = useState(false)
  const [loadingImage, setLoadingImage] = useState(false)
  const userInfo = useUserInfo(state => state.user)
  const navigate = useNavigate()

  async function handleUploadImage (e: ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files?.[0]
    const formData = new FormData()
    if (file) {
      setLoadingImage(true)
      formData.append('file', file)
      formData.append('upload_preset', 'nofirma')
      formData.append('folder', `spotify/${userInfo?.name}/cover_image`)
      const response = await uploadImage(formData, 'image')
      if (response.secure_url) {
        setValue('cover', response.secure_url)
        setImage(response.secure_url)
      }
    }
  }
  async function handleUploadMusic (e: ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files?.[0]
    const formData = new FormData()
    if (file) {
      setLoadingSong(true)
      formData.append('file', file)
      formData.append('upload_preset', 'nofirma')
      formData.append('folder', `spotify/${userInfo?.name}/music`)
      const response = await uploadImage(formData, 'auto')
      if (response.secure_url) {
        setValue('url', response.secure_url)
        setSong(response.secure_url)
        setValue('duration', response.duration)
      }
    }
  }

  async function sendData (data: FormFields) {
    toast.promise(createSong({ ...data, user_id: userInfo?.id }), {
      loading: 'Cargando...',
      success: () => {
        navigate('/dashboard')
        return 'Canción Creada'
      },
      error: 'Error al crear la cancion'
    })
  }

  return {
    loadingSong, loadingImage, image, song, handleUploadImage, handleUploadMusic, sendData, handleSubmit, errors, register, isSubmitting, control
  }
}
