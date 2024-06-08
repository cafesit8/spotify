import { Suspense, lazy } from 'react'
const Header = lazy(() => import('./Components/Header'))

export default function Search () {
  return (
    <section className='relative z-10 w-full h-full overflow-y-auto flex flex-col gap-7'>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <div className='w-full flex flex-col gap-4 lg:pb-0 pb-2'>
        <h4 className='lg:text-2xl text-lg font-semibold text-white'>Eplorar todo</h4>
        <div className="grid lg:gap-4 gap-2 lg:[grid-template-columns:repeat(auto-fill,minmax(270px,1fr))] md:[grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(150px,1fr))] lg:[grid-auto-rows:160px] [grid-auto-rows:120px]">
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#ec3e3e] overflow-hidden lg:p-4 p-3 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='lg:text-2xl text-lg font-bold'>Anime</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://i.scdn.co/image/ab67706f00000002678b81229c4b783dd816d87a" alt="" />
            </div>
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#7f49d4] overflow-hidden lg:p-4 p-3 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='lg:text-2xl text-lg font-bold'>Spider-Man</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://i.scdn.co/image/ab67706f000000022a2942d014b54753ea2938f3" alt="" />
            </div>
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#3ba140] overflow-hidden lg:p-4 p-3 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='lg:text-2xl text-lg font-bold'>No Copyright</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8468a229b4139569f5cf80c8c9" alt="" />
            </div>
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#c79d43] overflow-hidden lg:p-4 p-3 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='lg:text-2xl text-lg font-bold'>Electrónica</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://i.scdn.co/image/ab67616d0000b273660ee24281a547103f466ff5" alt="" />
            </div>
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#c4885e] overflow-hidden lg:p-4 p-3 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='lg:text-2xl text-lg font-bold'>Pop</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e" alt="" />
            </div>
          </article>
          <article className='aspect-square w-full h-full relative rounded-lg bg-[#c79d43] overflow-hidden lg:p-4 p-3 pr-0 cursor-pointer flex justify-between'>
            <div className='w-1/2'>
              <h4 className='lg:text-2xl text-lg font-bold'>Pop latino</h4>
            </div>
            <div className='relative w-1/2'>
              <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src="https://i.scdn.co/image/ab67616d0000b2738aa4f3ab66823042785b7f17" alt="" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
