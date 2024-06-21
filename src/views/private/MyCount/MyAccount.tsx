import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { EditIcon } from '@/icons/icons'
import { toast } from 'sonner'
import useMyAccount from './hooks/useMyAccount'

export default function MyAccount () {
  const { handleSubmit, register, errors, sendData, isSubmitting, user } = useMyAccount()
  return (
    <section className="w-full h-full flex flex-col gap-7 overflow-y-auto lg:pb-0 pb-3">
      <header>
        <h3 className="lg:text-5xl text-xl font-semibold">Editar Perfil</h3>
        <p className="text-white/80 text-balance lg:text-base text-sm">En esta sección podrás editar los datos de tu perfil como más te gusten</p>
      </header>
      <form onSubmit={handleSubmit(sendData)} className="w-full flex flex-col gap-4">
        <div className='flex flex-col gap-7'>
          <img className='w-[200px]' src='/Spotify_Full_Logo_RGB_Green.webp' alt="Logo de spotify" />
          <div className='grid gap-4 lg:[grid-template-columns:repeat(auto-fit,minmax(370px,1fr))] grid-template-columns:repeat(auto-fit,minmax(270px,1fr))]'>
            <div className='flex flex-col gap-4 w-full'>
              <Input label="Nombre" name='name' placeholder="ejmp: Pepito" register={register} errors={errors} />
              <Input label="Apellidos" name='surname' placeholder="ejmp: Perez Perez" register={register} errors={errors} />
              <Input label="Nombre de Usuario" name='username' placeholder="ejmp: pepito88" register={register} errors={errors} />
              <Input label="Correo" name='email' placeholder="ejmp: example@example.com" register={register} errors={errors} />
              <label className="text-white/50">
                Creación de la cuenta
                <input type="date" disabled {...register('date')} className='custom-date-input w-full bg-[#141414] border border-gray-600 p-1 rounded-md text-white/70 font-thin pl-2' />
              </label>
            </div>
            <div className='w-full overflow-hidden flex justify-center items-center rounded-full'>
              <label className='cursor-pointer lg:max-w-[370px] rounded-full overflow-hidden h-auto block'>
                <picture className='relative block lg:max-w-[370px] group/item'>
                  <div className='text-white absolute flex flex-col justify-center items-center inset-0 m-auto group/edit group-hover/item:z-30 lg:-z-10 z-30 bg-black/60 '>
                    <EditIcon className='w-10 h-10' />
                    <span className='text-xl'>Elegir foto</span>
                  </div>
                  <img className='w-full h-full object-cover' src={user?.photo_profile.url || '/user.jpg'} alt={`Portada del usuario ${user?.photo_profile.url}`} />
                  <input onChange={() => toast.error('Actualizar la imagen no está disponible en estos momentos :(')} type="file" accept='image/*' className='hidden' />
                </picture>
              </label>
            </div>
          </div>
        </div>
        <Button disabled={isSubmitting}>Guardar Perfil</Button>
      </form>
    </section>
  )
}
