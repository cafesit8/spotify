import { Suspense, lazy } from 'react'
import { categories } from '../data/categories'
const Card = lazy(() => import('./Card'))

export default function PlayList () {
  return (
    <div className='w-full flex flex-col gap-4 lg:pb-0 pb-2'>
      <h4 className='lg:text-2xl text-lg font-semibold text-white'>Eplorar todo</h4>
      <div className="grid lg:gap-4 gap-2 lg:[grid-template-columns:repeat(auto-fill,minmax(270px,1fr))] md:[grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(150px,1fr))] lg:[grid-auto-rows:160px] [grid-auto-rows:120px]">
        {categories.map(category => (
          <Suspense fallback={null}>
            <Card key={category.id} category={category} />
          </Suspense>
        ))}
      </div>
    </div>
  )
}
