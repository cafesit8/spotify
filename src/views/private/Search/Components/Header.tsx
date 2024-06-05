import { Input } from '@/components/ui/Input'
import { useForm } from 'react-hook-form'

export default function Header () {
  const { register, formState: { errors } } = useForm()

  return (
    <header className='flex flex-col gap-4'>
      <div>
        <h3 className="text-5xl font-semibold">Busca las canciones que quieras</h3>
        <p className="text-white/80 text-balance">Asegurate de escribir el nombre de la cancion, de no encontrarla puedes ayudar a publicar dando click en el botón de "Publicar Canción"</p>
      </div>
      <Input placeholder='¿Qué quieres reproducir?' name='search' errors={errors} register={register} className='max-w-[450px] relative placeholder:text-white/70' />
    </header>
  )
}
