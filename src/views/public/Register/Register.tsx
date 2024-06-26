import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import logo from '@/img/Spotify_Primary_Logo_RGB_White.webp'
import '@fontsource-variable/outfit'
import useRegister from './hooks/useRegister'

export default function Register () {
  const { handleFileChange, photo, status, STATUS, register, errors, handleSubmit, isSubmitting, sendData } = useRegister()

  return (
    <main className="w-full min-h-dvh overflow-y-auto bg-black grid place-content-center text-white py-7">
      <form onSubmit={handleSubmit(sendData)} className="bg-[#242424] sm:w-[400px] w-[300px] p-4 rounded-lg flex flex-col gap-4">
        <img className='sm:w-[100px] w-[50px] aspect-square m-auto' src={logo} alt="logo de spotify" title='logo de spotify' />
        <h1 className='m-auto sm:text-2xl text-xl font-semibold'>Regístrate</h1>
        <Input name='name' label='Nombre' errors={errors} register={register} placeholder='Pepito' />
        <Input name='surname' label='Apellido' errors={errors} register={register} placeholder='Perez Perez' />
        <Input name='username' label='Usuario' errors={errors} register={register} placeholder='pepito88' />
        {photo
          ? (
            <img className='max-h-36 w-fit m-auto' src={photo!} alt="Foto de perfil" />
          )
          : (
            <>
              <label className={`cursor-pointer ${errors.url ? 'border-red-400' : ''} border-[2px] border-dashed rounded-md p-4 text-center`}>
                {status === STATUS.IDLE && 'Subir Imagen'}
                {status === STATUS.SUBMITTING && 'Cargando...'}
                {status === STATUS.ERROR && 'Hubo un error :( inténtelo de nuevo'}
                <input onChange={handleFileChange} type="file" accept='image/*' className='hidden' />
              </label>
              {errors.url && <span className='text-red-400 -mt-4 text-xs'>{errors.url.message}</span>}
            </>
          )}
        <Input name='email' label='Correo' errors={errors} register={register} type='email' placeholder='example@example.com' />
        <Input name='password' label='Contraseña' errors={errors} register={register} type='password' placeholder='********' />
        <Button type='submit' variant={'default'}>{isSubmitting ? 'Cargando...' : 'Registrar'}</Button>
      </form>
    </main >
  )
}
