// import { API_URL } from '@/config'
// import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

// function handleClick (id: number) {
//   fetch(`${API_URL}/songs/categories/${id}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(() => toast.error('Hubo un error al cargar las canciones'))
// }

export default function Card ({ category }: any) {
  const navigate = useNavigate()
  function handleClick () {
    navigate(`/category/${category.id}`)
  }
  return (
    <article onClick={handleClick} className={`aspect-square w-full h-full relative rounded-lg bg-[${category.color}] overflow-hidden lg:p-4 p-3 pr-0 cursor-pointer flex justify-between`}>
      <div className='w-1/2'>
        <h4 className='lg:text-2xl text-lg font-bold'>{category.name}</h4>
      </div>
      <div className='relative w-1/2'>
        <img className='absolute w-[130px] right-0 transform rotate-[20deg] -bottom-5' src={category.img.src} alt={`Portada de la sección ${category.img.alt}`} />
      </div>
    </article>
  )
}
