import { getMusicList } from '@/services/api/getMusicList'
import { Data, Music } from '@/types/musicList'
import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function usePLayList () {
  const [musicList, setMusicList] = useState<Data>()
  const [loading, setLoading] = useState(true)
  const [musicFiltered, setMusicFiltered] = useState<Music[]>()
  const { register, formState: { errors } } = useForm()

  useEffect(() => {
    async function getData () {
      try {
        const result = await getMusicList()
        setLoading(false)
        setMusicList(result.data)
        setMusicFiltered(result.data.data.reverse())
      } catch (error) {
        toast.error('Error al cargar las canciones')
      }
    }
    getData()
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
