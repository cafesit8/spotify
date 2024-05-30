import { User } from '@/types/user'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

export type UserInfo = {
  access_token: string
  user: User | null
  token_type: string
  setUser: (info: UserInfo) => void
}

export const useUserInfo = create(persist<UserInfo>(
  (set) => ({
    access_token: '',
    user: null,
    token_type: '',
    setUser: (info: any) => set(() => ({ user: info.data, access_token: info.access_token, token_type: info.token_type }))
  })
  , {
    name: 'userInfo'
  }
))
