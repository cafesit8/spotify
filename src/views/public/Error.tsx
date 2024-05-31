import error from '@/img/404_error.png'
import '@fontsource-variable/outfit'

export default function Error () {
  return (
    <main className="w-full min-h-svh bg-[#141414] text-white grid place-content-center">
      <div>
        <p className='text-center text-4xl'>Hubo un error :(</p>
        <img className='w-[450px]' src={error} alt="" />
      </div>
    </main>
  )
}
