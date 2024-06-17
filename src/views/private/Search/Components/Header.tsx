import { Input } from '@/components/ui/Input'
import { API_URL } from '@/config'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

function handleSearch (song: string) {
  fetch(`${API_URL}/songs/search/${song}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(() => toast.error('Hubo un error al cargar las canciones'))
}

export default function Header () {
  const { register, formState: { errors } } = useForm()

  return (
    <header className='flex flex-col gap-4'>
      <div>
        <h3 className="lg:text-5xl text-xl font-semibold">Busca las canciones que quieras</h3>
        <p className="text-white/80 lg:text-base text-sm text-balance">Asegurate de escribir el nombre de la cancion, de no encontrarla puedes ayudar a publicar dando click en el botón de "Publicar Canción"</p>
      </div>
      <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(e.target.search.value)
      }}>
        <Input placeholder='¿Qué quieres reproducir?' name='search' errors={errors} register={register} className='max-w-[450px] relative placeholder:text-white/70' />
      </form>
    </header>
  )
}
