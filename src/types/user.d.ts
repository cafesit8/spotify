export type PhotoProfile = {
  id: number
  url: string
}
export type User = {
  id: number
  name: string
  surname: string
  username: string
  email: string
  created_at: string
  photo_profile: PhotoProfile
}
