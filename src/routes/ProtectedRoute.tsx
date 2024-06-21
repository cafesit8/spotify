import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute ({ children }: { children: ReactNode }) {
  const user = JSON.parse(localStorage.getItem('userInfo'))

  if (user != null) {
    if (user.access_token == null) {
      return <Navigate to="/login" />
    }
  }
  return children
}
