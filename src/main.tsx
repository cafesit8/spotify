import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/router.tsx'
import { Toaster } from 'sonner'
// import PlayerContext from './views/layouts/context/PlayerContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={routes} />
    <Toaster richColors position="bottom-right" />
  </>
)
