import { API_URL } from '@/config'

export async function createSong (data: any) {
  const res = await fetch(`${API_URL}/song_details`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    throw new Error('Error al crear la cancion')
  }

  return await res.json()
}
