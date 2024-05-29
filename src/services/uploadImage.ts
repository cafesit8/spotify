export async function uploadImage (formData: FormData) {
  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/deeezka8t/image/upload', {
    method: 'POST',
    body: formData
  })
  const result = await res.json()
  return result
  } catch (err) {
    return err
  }
}
