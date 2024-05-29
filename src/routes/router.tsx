import { Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import Error from '@/views/public/Error'
const Login = lazy(() => import('@/views/public/Login/Login'))
const Register = lazy(() => import('@/views/public/Register/Register'))
const DashboardLayout = lazy(() => import('@/views/layouts/DashboardLayout'))
const Dashboard = lazy(() => import('@/views/private/Dashboard/Dashboard'))

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
    path: '/',
    element: <Suspense fallback={null}><DashboardLayout /></Suspense>,
    errorElement: <Error />,
    children: [
      { element: <Navigate to="/dashboard" />, index: true },
      {
        path: '/dashboard',
        element: <Suspense fallback={null}><Dashboard /></Suspense>,
        errorElement: <Error />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
])
