export default function Skeleton () {
  return (
    <div className='grid gap-3 xl:[grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(170px,1fr))] sm:[grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] [grid-template-columns:repeat(auto-fit,minmax(70px,1fr))]'>
      <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
      <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
      <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
      <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
      <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
      <article className='aspect-square w-full animate-pulse bg-[#1f1e1e]'></article>
    </div>
  )
}
