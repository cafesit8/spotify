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
const MyAccount = lazy(() => import('@/views/private/MyCount/MyAccount'))
const SongList = lazy(() => import('@/views/private/Search/SongsListByCategory/SongList'))

export const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Suspense fallback={<Loading fullScreen />}><Login /></Suspense>,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Suspense fallback={<Loading fullScreen />}><Register /></Suspense>,
    errorElement: <Error />
  },
  {
    path: '/',
    element: <Suspense fallback={<Loading fullScreen />}><DashboardLayout /></Suspense>,
    errorElement: <Error />,
    children: [
      { element: <Navigate to="/dashboard" />, index: true },
      {
        path: '/dashboard',
        element: <Suspense fallback={<Loading transparent fullScreen />}><Dashboard /></Suspense>,
        errorElement: <Error transparent />
      },
      {
        path: '/search',
        element: <Suspense fallback={<Loading transparent />}><Search /></Suspense>,
        errorElement: <Error transparent />
      },
      {
        path: '/search/:id',
        element: <Suspense fallback={<Loading transparent />}><SongList /></Suspense>,
        errorElement: <Error transparent />
      },
      {
        path: '/upload-song',
        element: <Suspense fallback={<Loading transparent />}><UploadSong /></Suspense>,
        errorElement: <Error transparent />
      },
      {
        path: '/my-account',
        element: <Suspense fallback={<Loading transparent />}><MyAccount /></Suspense>,
        errorElement: <Error transparent />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
])
