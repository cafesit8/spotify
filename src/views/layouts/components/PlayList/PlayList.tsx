import { Input } from '@/components/ui/Input'
import { ArrowLeftIcon, ArrowRightIcon, BookIcon, SearchIcon } from '@/icons/icons'
import Table from './components/Table'
import usePLayList from '../hooks/usePLayList'

type Props = {
  handleCollapse: () => void
  collapse: boolean
}

export default function PlayList ({ handleCollapse, collapse }: Props) {
  const { errors, register, handleInputChange, musicFiltered, loading } = usePLayList()
  return (
    <aside className='[grid-area:playlist] playlist bg-[#141414] rounded-xl p-5 text-white flex flex-col gap-4'>
      <div className='flex justify-between text-white/70'>
        <h3 className='flex gap-4 font-semibold'><BookIcon /> Música recién compartida</h3>
        <button onClick={handleCollapse}>{collapse ? <ArrowLeftIcon /> : <ArrowRightIcon />}</button>
      </div>
      <div>
        <div className='relative'>
          <Input onChange={handleInputChange} className='pr-9 text-white/80 opacity-80 border-white/60' errors={errors} name='search' register={register} placeholder='Buscar canción' />
          <SearchIcon className='absolute text-white/70 right-2 top-0 bottom-0 m-auto' />
        </div>
      </div>
      <div className='overflow-y-auto'>
        {loading
          ? (
            <div className='flex flex-col gap-2'>
              <div className='w-full h-14 animate-pulse bg-[#222222] rounded-lg'></div>
              <div className='w-full h-14 animate-pulse bg-[#222222] rounded-lg'></div>
              <div className='w-full h-14 animate-pulse bg-[#222222] rounded-lg'></div>
              <div className='w-full h-14 animate-pulse bg-[#222222] rounded-lg'></div>
              <div className='w-full h-14 animate-pulse bg-[#222222] rounded-lg'></div>
              <div className='w-full h-14 animate-pulse bg-[#222222] rounded-lg'></div>
              <div className='w-full h-14 animate-pulse bg-[#222222] rounded-lg'></div>
            </div>
          )
          : (
            <Table collapse={collapse} musicFiltered={musicFiltered} />
          )}
      </div>
    </aside>
  )
}