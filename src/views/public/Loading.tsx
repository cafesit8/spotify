import gif from '@/img/spotify-loading-unscreen.gif'

export default function Loading ({ transparent = false }: { transparent?: boolean }) {
  return (
    <div className={`${transparent ? 'bg-transparent' : 'bg-[#141414]'} w-full min-h-svh grid place-content-center`}>
      <img className='w-[450px]' src={gif} alt="" />
    </div>
  )
}
