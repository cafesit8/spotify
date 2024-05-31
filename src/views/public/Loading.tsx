import gif from '@/img/spotify-loading-unscreen.gif'

export default function Loading () {
  return (
    <div className="w-full min-h-svh bg-[#141414] grid place-content-center">
      <img className='w-[450px]' src={gif} alt="" />
    </div>
  )
}
