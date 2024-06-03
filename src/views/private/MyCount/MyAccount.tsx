import { Input } from '@/components/ui/Input'
import logo from '@/img/Spotify_Full_Logo_RGB_Green.png'
import { Button } from '@/components/ui/Button'
import { EditIcon } from '@/icons/icons'
import { toast } from 'sonner'
import useMyAccount from './hooks/useMyAccount'

export default function MyAccount () {
  const { handleSubmit, register, errors, sendData, isSubmitting, userInfo } = useMyAccount()
  return (
    <section className="w-full h-full flex flex-col gap-7 overflow-y-auto">
      <header>
        <h3 className="text-5xl font-semibold">Editar Perfil</h3>
        <p className="text-white/80 text-balance">En esta sección podrás editar los datos de tu perfil como más te gusten</p>
      </header>
      <form onSubmit={handleSubmit(sendData)} className="flex flex-col gap-4">
        <div className='flex flex-col gap-7'>
          <img className='w-[200px]' src={logo} alt="" />
          <div className='grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(370px,1fr))]'>
            <div className='flex flex-col gap-4 w-full'>
              <Input label="Nombre" name='name' placeholder="Pepito" register={register} errors={errors} />
              <Input label="Apellidos" name='surname' placeholder="Perez Perez" register={register} errors={errors} />
              <Input label="Nombre de Usuario" name='username' placeholder="pepito88" register={register} errors={errors} />
              <Input label="Correo" name='email' placeholder="example@example.com" register={register} errors={errors} />
              <label className="text-white/50">
                Creación de la cuenta
                <input type="date" disabled {...register('date')} className='custom-date-input w-full bg-[#141414] border border-gray-600 p-1 rounded-md text-white/70 font-thin pl-2' />
              </label>
            </div>
            <div className='w-full overflow-hidden flex justify-center rounded-full'>
              <label className='cursor-pointer max-w-[370px] rounded-full overflow-hidden h-auto block'>
                <div className='relative group/item'>
                  <div className='text-white absolute flex flex-col justify-center items-center inset-0 m-auto group/edit group-hover/item:z-30 -z-10 bg-black/60 '>
                    <EditIcon className='w-10 h-10' />
                    <span className='text-xl'>Elegir foto</span>
                  </div>
                  <img className='w-full h-full object-cover' src={userInfo?.photo_profile.url} alt="" />
                  <input onChange={() => toast.error('Actualizar la imagen no está disponible en estos momentos :(')} type="file" accept='image/*' className='hidden' />
                </div>
              </label>
            </div>
          </div>
        </div>
        <Button disabled={isSubmitting}>Guardar Perfil</Button>
      </form>
    </section>
  )
}
