import { Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import Error from '@/views/public/Error'
import Loading from '@/views/public/Loading'
const Login = lazy(() => import('@/views/public/Login/Login'))
const Register = lazy(() => import('@/views/public/Register/Register'))
const DashboardLayout = lazy(() => import('@/views/layouts/DashboardLayout'))
const Dashboard = lazy(() => import('@/views/private/Dashboard/Dashboard'))
const Search = lazy(() => import('@/views/private/Search/Search'))
const UploadSong = lazy(() => import('@/views/private/Upload/UploadSong'))

export const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Suspense fallback={<Loading />}><Login /></Suspense>,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Suspense fallback={<Loading />}><Register /></Suspense>,
    errorElement: <Error />
  },
  {
    path: '/',
    element: <Suspense fallback={<Loading />}><DashboardLayout /></Suspense>,
    errorElement: <Error />,
    children: [
      { element: <Navigate to="/dashboard" />, index: true },
      {
        path: '/dashboard',
        element: <Suspense fallback={<Loading />}><Dashboard /></Suspense>,
        errorElement: <Error />
      },
      {
        path: '/dashboard/search',
        element: <Suspense fallback={<Loading />}><Search /></Suspense>,
        errorElement: <Error />
      },
      {
        path: '/dashboard/upload-song',
        element: <Suspense fallback={<Loading />}><UploadSong /></Suspense>,
        errorElement: <Error />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
])
