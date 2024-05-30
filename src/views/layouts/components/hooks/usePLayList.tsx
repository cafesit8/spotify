import { API_URL } from '@/config'
import { Data } from '@/types/musicList'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function usePLayList () {
  const [musicList, setMusicList] = useState<Data>()
  const { register, formState: { errors } } = useForm()

  useEffect(() => {
    async function getMusicList () {
      const res = await fetch(`${API_URL}/song_details`)
      if (!res.ok) {
        toast.error('Error al cargar las canciones')
        throw new Error('Error fetching music list')
      }
      const result = await res.json()
      setMusicList(result.data)
    }
    getMusicList()
  }, [])

  return {
    musicList,
    register,
    errors
  }
}
