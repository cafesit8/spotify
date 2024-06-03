import Header from './components/Header.tsx'
import Form from './components/Form.tsx'

export default function UploadSong () {
  return (
    <section className="flex flex-col gap-7 overflow-y-auto">
      <Header />
      <Form />
    </section>
  )
}
