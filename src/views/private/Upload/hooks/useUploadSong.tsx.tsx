import { useState } from 'react'

export default function useUploadSong () {
  const [loadingSong, setLoadingSong] = useState(false)
  const [loadingImage, setLoadingImage] = useState(false)

  return {
    loadingSong,
    setLoadingSong,
    setLoadingImage,
    loadingImage
  }
}
