import { Music } from '@/types/musicList'
import { useEffect, useState } from 'react'

export const usePersistedState = (key: string, initialState: Music | null) => {
  const [state, setState] = useState<Music | null>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialState
  })

  useEffect(() => {
    if (state !== null) {
      localStorage.setItem(key, JSON.stringify(state))
    } else {
      localStorage.removeItem(key)
    }
  }, [key, state])

  return [state, setState] as const
}
