export function modifyCloudinaryUrl (url: string) {
  if (typeof url !== 'string' || !url.includes('cloudinary.com')) {
    throw new Error('Invalid Cloudinary URL')
  }
  let modifiedUrl = url.replace(/\.jpg$/, '.webp')
  const uploadPosition = modifiedUrl.indexOf('/upload') + 8
  const sizeParameter = 'w_300'
  modifiedUrl = [modifiedUrl.slice(0, uploadPosition), sizeParameter, modifiedUrl.slice(uploadPosition)].join('/')

  return modifiedUrl
}
