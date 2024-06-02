import { Input } from '@/components/ui/Input'
import logo from '@/img/Spotify_Full_Logo_RGB_Green.png'
import { DatePickerDemo } from '@/components/ui/InputDate'
import { UploadImageIcon, UploadMusicIcon } from '@/icons/icons'
import { Button } from '@/components/ui/Button'
import useUploadSong from './hooks/useUploadSong.tsx'
import { WaveSounds } from './components/WaveSound.tsx'

export default function UploadSong () {
  const { loadingSong, loadingImage, image, song, handleUploadImage, handleUploadMusic, sendData, handleSubmit, errors, register, isSubmitting } = useUploadSong()

  return (
    <section className="flex flex-col gap-7 overflow-y-auto">
      <header>
        <p className="text-5xl font-semibold">Comparte Tu Canción</p>
        <p className="text-white/80 text-balance">Ahora tienes la oportunidad de compartir con los demás tus gustos musicales y las canciones que te gusten, estos serán publicados para que los demás puedan verlos, escuchar y disfrutar de tus canciones favoritas.</p>
      </header>
      <form onSubmit={handleSubmit(sendData)} className="flex flex-col gap-4">
        <img className='w-[200px]' src={logo} alt="" />
        <div className='flex gap-4 w-full'>
          <div className='w-full flex flex-col gap-4'>
            <Input label="Nombre de la canción" name='name' placeholder="Lovely" register={register} errors={errors} />
            <Input label="Artista" name='artist' placeholder="Billi Eilish" register={register} errors={errors} />
            <DatePickerDemo name='post_date' disabled text='La fecha se guarda automaticamente' label='Fecha de Publicación' />
            {song
              ? (
                <WaveSounds audioUrl={song} />
              )
              : <label className={`cursor-pointer ${errors.url ? 'border-red-400' : ''} border-[1px] mt-1 flex justify-center items-center border-dashed rounded-md p-4 text-center`}>
                <div className='flex flex-col items-center gap-1'>
                  <UploadMusicIcon />
                  <p>{loadingSong ? 'Cargando...' : 'Selecione una Canción'}</p>
                </div>
                <input onChange={handleUploadMusic} type="file" accept='audio/*' className='hidden' />
              </label>}
          </div>
          <div className='w-full flex flex-col gap-4'>
            <Input label="Álbum" name='album' placeholder="Happier Than Ever" register={register} errors={errors} />
            <>
              <label>
                Lanzamiento de la Canción
                <input {...register('realease_date')} className={`${errors.realease_date ? 'border-red-400' : ''} custom-date-input w-full bg-[#141414] border p-1 rounded-md text-white/70 font-thin pl-2`} type="date" />
              </label>
              {errors.realease_date && <span className='text-red-400 text-xs -mt-4'>{errors.realease_date.message}</span>}
            </>
            <Input label="Duración de la cancion" name='duration' disabled placeholder="La duración se calculará automáticamente" register={register} errors={errors} />
            {image
              ? (
                <div className='border border-dashed rounded-lg w-full max-h-[200px] block'>
                  <img className='w-full h-full object-contain' src={image} alt="" />
                </div>
              )
              : <label className={`cursor-pointer ${errors.cover ? 'border-red-400' : ''} border-[1px] mt-1 flex justify-center items-center border-dashed rounded-md p-4 text-center`}>
                <div className='flex flex-col items-center gap-1'>
                  <UploadImageIcon />
                  <p>{loadingImage ? 'Cargando...' : 'Portada de la Canción'}</p>
                </div>
                <input onChange={handleUploadImage} type="file" accept='image/*' className='hidden' />
              </label>}
          </div>
        </div>
        <Button disabled={isSubmitting}>Publicar</Button>
      </form>
    </section>
  )
}
