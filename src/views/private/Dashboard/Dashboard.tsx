import Header from './Components/Header'
import AviciiSection from './Sections/Avicii/AviciiSection'

export default function Dashboard () {
  return (
    <section className='relative z-10 w-full h-full overflow-y-auto flex flex-col gap-7'>
      <Header />
      <AviciiSection />
    </section>
  )
}
