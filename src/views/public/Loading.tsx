import './loader.css'
export default function Loading ({ transparent = false, fullScreen = false }: { transparent?: boolean, fullScreen?: boolean }) {
  return (
    <div className={`${transparent ? 'bg-transparent' : 'bg-[#141414]'} w-full ${fullScreen ? 'h-dvh' : 'h-full'} grid place-content-center`}>
      <div className='loader'></div>
    </div>
  )
}
