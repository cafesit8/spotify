import { User } from '@/types/user'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

type UserInfo = {
  acces_token: string
  user: User | null
  token_type: string
  setUser: (info: UserInfo) => void
}

export const useUserInfo = create(persist<UserInfo>(
  (set) => ({
    acces_token: '',
    user: null,
    token_type: '',
    setUser: (info: any) => set(() => ({ user: info.data, acces_token: info.acces_token, token_type: info.token_type }))
  })
  , {
    name: 'userInfo'
  }
))
