import { Input } from '@/components/ui/Input'
import { useForm } from 'react-hook-form'
import logo from '@/img/Spotify_Full_Logo_RGB_Green.png'
import { DatePickerDemo } from '@/components/ui/InputDate'
import { PauseIcon, PlayIcon, UploadImageIcon, UploadMusicIcon } from '@/icons/icons'
import { Button } from '@/components/ui/Button'
import { uploadImage } from '@/services/api/uploadImage'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import useUploadSong from './hooks/useUploadSong.tsx'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUserInfo } from '@/store/userInfo.ts'
import { createSong } from '@/services/api/createSong.ts'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function WaveSounds ({ audioUrl }: { audioUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const waveformRef = useRef<HTMLDivElement>(null)
  const wavesurferRef = useRef<WaveSurfer>()

  useEffect(() => {
    if (!waveformRef.current) return

    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'white',
      progressColor: '#16a34a'
    })

    wavesurferRef.current = wavesurfer
    wavesurfer.load(audioUrl)
    wavesurfer.play()
    wavesurfer.setVolume(0.1)
    return () => {
      wavesurfer.destroy()
    }
  }, [audioUrl])

  const togglePlayPause = () => {
    if (wavesurferRef.current) {
      if (isPlaying) {
        wavesurferRef.current.pause()
      } else {
        wavesurferRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full block' ref={waveformRef} />
      <button onClick={togglePlayPause} className='bg-white rounded-full p-1'>
        {isPlaying ? <PauseIcon className='text-black p-1' /> : <PlayIcon className='text-black p-1' />}
      </button>
    </div>
  )
}

const schema = z.object({
  name: z.string().min(1, { message: 'Este campo es requerido' }),
  artist: z.string().min(1, { message: 'Este campo es requerido' }),
  album: z.string().min(1, { message: 'Este campo es requerido' }),
  realease_date: z.string().min(1, { message: 'Debe seleccionar una fecha' }),
  duration: z.number(),
  url: z.string().min(1, { message: 'Debe subir una cancion' }),
  cover: z.string().min(1, { message: 'Debe subir una imagen' })
})

type FormFields = z.infer<typeof schema>

export default function UploadSong () {
  const [image, setImage] = useState()
  const [song, setSong] = useState()
  const { register, formState: { errors }, setValue, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(schema)
  })
  const { loadingSong, setLoadingSong, loadingImage, setLoadingImage } = useUploadSong()
  const userInfo = useUserInfo(state => state.user)
  const navigate = useNavigate()
  async function handleUploadImage (e: ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files?.[0]
    const formData = new FormData()
    if (file) {
      setLoadingImage(true)
      formData.append('file', file)
      formData.append('upload_preset', 'nofirma')
      formData.append('folder', 'spotify/cover_image')
      const response = await uploadImage(formData, 'image')
      if (response.secure_url) {
        setValue('cover', response.secure_url)
        setImage(response.secure_url)
      }
    }
  }
  async function handleUploadMusic (e: ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files?.[0]
    const formData = new FormData()
    if (file) {
      setLoadingSong(true)
      formData.append('file', file)
      formData.append('upload_preset', 'nofirma')
      formData.append('folder', 'spotify/music')
      const response = await uploadImage(formData, 'auto')
      if (response.secure_url) {
        setValue('url', response.secure_url)
        setSong(response.secure_url)
        setValue('duration', response.duration)
      }
    }
  }

  async function sendData (data: FormFields) {
    toast.promise(createSong({ ...data, user_id: userInfo?.id }), {
      loading: 'Cargando...',
      success: () => {
        navigate('/dashboard')
        return 'Canción Creada'
      },
      error: 'Error al crear la cancion'
    })
  }
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
                <div className='w-full h-full flex flex-col justify-center items-center'>
                  <WaveSounds audioUrl={song} />
                </div>
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
                  <p>{loadingImage ? 'Cargando...' : 'Sube la Portada de la Canción'}</p>
                </div>
                <input onChange={handleUploadImage} type="file" accept='image/*' className='hidden' />
              </label>}
          </div>
        </div>
        <Button>Publicar</Button>
      </form>
    </section>
  )
}
