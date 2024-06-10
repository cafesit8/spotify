import error from '@/img/404_error.webp'
import '@fontsource-variable/outfit'

export default function Error ({ transparent = false }: { transparent?: boolean }) {
  return (
    <main className={`${transparent ? 'bg-transparent' : 'bg-[#141414]'} w-full h-dvh text-white grid place-content-center`}>
      <div>
        <p className='text-center text-4xl'>Hubo un error :(</p>
        <img className='w-[450px]' src={error} alt="Imagen de error 404" />
      </div>
    </main>
  )
}
