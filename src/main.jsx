import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './assets/Home'
import Game from './assets/Game'
import Wishlist from './assets/Wishlist'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { Toaster }from 'react-hot-toast'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path:'/Game/:id',
      element: <Game/>
    },
    {
      path: '/Wishlist',
      element: <Wishlist/>
    }
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" />
    <RouterProvider router={ router }/>
  </StrictMode>
)
