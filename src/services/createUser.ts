export async function createUser (data: any) {
    const res = await fetch('http://127.0.0.1:8000/api/users', {
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
