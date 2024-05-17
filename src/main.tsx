import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes/Router.tsx'
import { CartContextProvider } from './context/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={Routes}/>
    </CartContextProvider>
  </React.StrictMode>,
)
