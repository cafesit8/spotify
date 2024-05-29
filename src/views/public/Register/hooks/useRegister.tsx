import { uploadImage } from '@/services/uploadImage'
import { ChangeEvent, useState } from 'react'

const STATUS = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error'
} as const

type StatusProps = typeof STATUS[keyof typeof STATUS]
export default function useRegister () {
  const [status, setStatus] = useState<StatusProps>(STATUS.IDLE)
  const [photo, setPhoto] = useState<null | string>(null)
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
        setStatus(STATUS.SUCCESS)
      } else {
        setStatus(STATUS.ERROR)
      }
    }
  }

  return {
    status,
    photo,
    handleFileChange,
    STATUS
  }
}
