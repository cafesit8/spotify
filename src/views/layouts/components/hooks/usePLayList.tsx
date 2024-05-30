import { API_URL } from '@/config'
import { Data, Music, Response } from '@/types/musicList'
import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function usePLayList () {
  const [musicList, setMusicList] = useState<Data>()
  const [loading, setLoading] = useState(true)
  const [musicFiltered, setMusicFiltered] = useState<Music[]>()
  const { register, formState: { errors } } = useForm()

  useEffect(() => {
    async function getMusicList () {
      const res = await fetch(`${API_URL}/song_details`)
      if (!res.ok) {
        toast.error('Error al cargar las canciones')
        throw new Error('Error fetching music list')
      }
      const result = await res.json() as Response
      setLoading(false)
      setMusicList(result.data)
      setMusicFiltered(result.data.data)
    }
    getMusicList()
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredMusicList = musicList?.data.filter(song => {
      return song.name.toLowerCase().includes(e.target.value.toLowerCase())
    })

    setMusicFiltered(filteredMusicList)
  }

  return {
    register,
    errors,
    handleInputChange,
    musicFiltered,
    loading
  }
}
