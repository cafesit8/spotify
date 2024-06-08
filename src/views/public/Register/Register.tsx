import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import logo from '@/img/Spotify_Primary_Logo_RGB_White.webp'
import '@fontsource-variable/outfit'
import useRegister from './hooks/useRegister'

export default function Register () {
  const { handleFileChange, photo, status, STATUS, register, errors, handleSubmit, isSubmitting, sendData } = useRegister()

  return (
    <main className="w-full min-h-screen bg-black grid place-content-center text-white">
      <form onSubmit={handleSubmit(sendData)} className="bg-[#242424] w-[400px] p-4 rounded-lg flex flex-col gap-4">
        <img className='w-[100px] m-auto' src={logo} alt="logo de spotify" title='logo de spotify' />
        <h1 className='m-auto text-2xl font-semibold'>Regístrate</h1>
        <Input name='name' label='Nombre' errors={errors} register={register} placeholder='Pepito' />
        <Input name='surname' label='Apellido' errors={errors} register={register} placeholder='Perez Perez' />
        <Input name='username' label='Usuario' errors={errors} register={register} placeholder='pepito88' />
        {photo
          ? (
            <img className='max-h-36 w-fit m-auto' src={photo!} alt="" />
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
