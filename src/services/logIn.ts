import { API_URL } from '@/config'

export async function logIn (data: any) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    throw new Error('Error al iniciar sesión')
  }
  const result = await res.json()
  return result
}
