import { API_URL } from '@/config'

export async function updateUser (data: any, id?: number) {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    throw new Error('Error al actualizar el usuario')
  }
  return await res.json()
}
