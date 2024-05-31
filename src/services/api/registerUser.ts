import { API_URL } from '@/config'
export async function registerUser (data: any) {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    throw new Error('Error al registrarse')
  }
  const result = await res.json()
  return result
}
