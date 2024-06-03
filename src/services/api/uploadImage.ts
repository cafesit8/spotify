import { CLOUDINARY_URL } from '@/config'

export async function uploadImage (formData: FormData, type: string = 'image') {
  try {
    const res = await fetch(`${CLOUDINARY_URL}/${type}/upload`, {
      method: 'POST',
      body: formData
    })
    if (!res.ok) {
      throw new Error('Error uploading image')
    }
    const result = await res.json()
    return result
  } catch (err) {
    return err
  }
}
