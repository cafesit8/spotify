export default function Skeleton () {
  return (
    <section className="w-full flex flex-col gap-2">
      <h3 className="text-3xl text-white/90 animate-pulse h-[40px] bg-[#1f1e1e] w-1/2 rounded-lg"></h3>
      <div className='grid gap-3 lg:[grid-template-columns:repeat(auto-fit,minmax(160px,1fr))] sm:[grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))]'>
        <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
        <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
        <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
        <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
        <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
        <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
      </div>
    </section>
  )
}
