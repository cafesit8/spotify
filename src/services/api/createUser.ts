import { API_URL } from '@/config'

export async function createUser (data: any) {
    const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    throw new Error('Error al crear el usuario')
  }

  return await res.json()
}
