import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Error from '@/views/public/Error'
const Login = lazy(() => import('@/views/public/Login/Login'))
const Register = lazy(() => import('@/views/public/Register/Register'))

export const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Suspense fallback={null}><Login /></Suspense>,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Suspense fallback={null}><Register /></Suspense>,
    errorElement: <Error />
  },
  {
    path: '*',
    element: <Error />
  }
])
