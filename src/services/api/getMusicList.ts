import { API_URL } from '@/config'

export async function getMusicList () {
  const res = await fetch(`${API_URL}/song_details`)
  if (!res.ok) {
    throw new Error('Error fetching music list')
  }
  const result = await res.json()
  return result
}
