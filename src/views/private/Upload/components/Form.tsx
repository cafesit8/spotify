import { Input } from '@/components/ui/Input.tsx'
import useUploadSong from '../hooks/useUploadSong.tsx'
import { WaveSounds } from './WaveSound.tsx'
import { UploadImageIcon, UploadMusicIcon } from '@/icons/icons.tsx'
import { Button } from '@/components/ui/Button.tsx'
import SelectUi from '@/components/ui/Select.tsx'

export default function Form () {
  const { loadingSong, loadingImage, image, song, handleUploadImage, handleUploadMusic, sendData, handleSubmit, errors, register, isSubmitting, control } = useUploadSong()
  const categoriesList = [{
    id: 1,
    name: 'Anime'
  }, {
    id: 2,
    name: 'Spider-Man'
  }, {
    id: 3,
    name: 'No copyright'
  }, {
    id: 4,
    name: 'Electrónica'
  }, {
    id: 5,
    name: 'Pop'
  }, {
    id: 6,
    name: 'Pop latino'
  }]
  return (
    <form onSubmit={handleSubmit(sendData)} className="flex flex-col gap-4">
      <img className='w-[200px]' src='/Spotify_Full_Logo_RGB_Green.webp' alt="" />
      <div className='flex gap-4 w-full'>
        <div className='w-full flex flex-col gap-4'>
          <Input label="Nombre de la canción" name='name' placeholder="Lovely" register={register} errors={errors} />
          <Input label="Artista" name='artist' placeholder="Billi Eilish" register={register} errors={errors} />
          <SelectUi label='Categoria' list={categoriesList} control={control} name='category_id' errors={errors} />
          {song
            ? (
              <WaveSounds audioUrl={song} />
            )
            : <label className={`cursor-pointer ${errors.url ? 'border-red-400' : ''} border-[1px] min-h-[150px] mt-1 flex justify-center items-center border-dashed rounded-md p-4 text-center`}>
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
            : <label className={`cursor-pointer ${errors.cover ? 'border-red-400' : ''} border-[1px] mt-1 flex justify-center items-center border-dashed rounded-md p-4 text-center h-[150px]`}>
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
  )
}
