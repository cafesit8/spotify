import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import logo from '@/img/Spotify_Primary_Logo_RGB_White.png'
import '@fontsource-variable/outfit'
import useRegister from './hooks/useRegister'

export default function Register () {
  const { handleFileChange, photo, status, STATUS } = useRegister()
  return (
    <main className="w-full min-h-screen bg-black grid place-content-center text-white">
      <form className="bg-[#242424] w-[400px] p-4 rounded-lg flex flex-col gap-4">
        <img className='w-[100px] m-auto' src={logo} alt="logo de spotify" title='logo de spotify' />
        <h1 className='m-auto text-2xl font-semibold'>Register</h1>
        <label>
          Nombre
          <Input placeholder="Pepito" />
        </label>
        <label>
          Apellido
          <Input placeholder="Perez Perez" />
        </label>
        <label>
          Usuario
          <Input placeholder="pepito88" />
        </label>
        {photo
          ? (
            <img className='max-h-36 w-fit m-auto' src={photo!} alt="" />
          )
          : (
            <label className='cursor-pointer border-[2px] border-dashed rounded-md p-4 text-center'>
              {status === STATUS.IDLE && 'Subir Imagen'}
              {status === STATUS.SUBMITTING && 'Cargando...'}
              {status === STATUS.ERROR && 'Hubo un error :( inténtelo de nuevo'}
              <input onChange={handleFileChange} type="file" accept='image/*' className='hidden' />
            </label>
          )}
        <label>
          Correo
          <Input placeholder="example@example.com" />
        </label>
        <label>
          Contraseña
          <Input placeholder="example@example.com" type='password' />
        </label>
        <Button variant={'default'}>Iniciar</Button>
      </form>
    </main >
  )
}
