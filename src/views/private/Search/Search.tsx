import Header from './Components/Header'

export default function Search () {
  return (
    <section className='relative z-10 w-full h-full overflow-y-auto flex flex-col gap-7'>
      <Header />
      <div className='w-full flex flex-col gap-4'>
        <h4 className='text-2xl font-semibold text-white'>Eplorar todo</h4>
        <div className="grid gap-4 lg:[grid-template-columns:repeat(auto-fill,minmax(270px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] [grid-auto-rows:160px]">
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#ec3e3e] overflow-hidden p-4 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='text-2xl font-bold'>Anime</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://i.scdn.co/image/ab67706f00000002678b81229c4b783dd816d87a" alt="" />
            </div>
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#7f49d4] overflow-hidden p-4 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='text-2xl font-bold'>Spider-Man</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://i.scdn.co/image/ab67706f000000022a2942d014b54753ea2938f3" alt="" />
            </div>
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#3ba140] overflow-hidden p-4 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='text-2xl font-bold'>No Copyright</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8468a229b4139569f5cf80c8c9" alt="" />
            </div>
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#c79d43] overflow-hidden p-4 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='text-2xl font-bold'>Electrónica</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://i.scdn.co/image/ab67616d0000b273660ee24281a547103f466ff5" alt="" />
            </div>
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#c4885e] overflow-hidden p-4 cursor-pointer'>
            <h4 className='text-2xl font-bold'>Pop</h4>
            <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-2' src="https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e" alt="" />
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#d3a031] overflow-hidden p-4 cursor-pointer'>
            <h4 className='text-2xl font-bold'>Pop latino</h4>
            <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-2' src="https://i.scdn.co/image/ab67616d0000b2738aa4f3ab66823042785b7f17" alt="" />
          </article>
        </div>
      </div>
    </section>
  )
}
