import { Input } from '@/components/ui/Input'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'

export default function Header () {
  const { register, formState: { errors } } = useForm()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = useDebouncedCallback((song: string) => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('song', song)
    if (song === '') {
      newSearchParams.delete('song')
    }
    setSearchParams(newSearchParams)
  }, 400)

  return (
    <header className='flex flex-col gap-4'>
      <div>
        <h3 className="lg:text-5xl text-xl font-semibold">Busca las canciones que quieras</h3>
        <p className="text-white/80 lg:text-base text-sm text-balance">Asegurate de escribir el nombre de la cancion, de no encontrarla puedes ayudar a publicar dando click en el botón de "Publicar Canción"</p>
      </div>
      <Input
        defaultValue={searchParams.get('song') || ''}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
        placeholder='¿Qué quieres reproducir?'
        name='search'
        errors={errors}
        register={register}
        className='max-w-[450px] relative placeholder:text-white/70'
      />
    </header>
  )
}
