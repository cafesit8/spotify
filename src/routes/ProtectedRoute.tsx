import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute ({ children }: { children: ReactNode }) {
  const user = localStorage.getItem('userInfo')
  if (user) {
    const parsedUser = JSON.parse(user)
    if (parsedUser.state.access_token) {
      return children
    }
  }

  return <Navigate to="/login" />
}
