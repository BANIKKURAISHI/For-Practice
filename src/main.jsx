import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import myCreateRoute from './COMPONENTS/MainLayout/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PrivetRoute from './COMPONENTS/PrivateRoute/AuthProvider'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrivetRoute>
      <RouterProvider router={myCreateRoute} />
      </PrivetRoute>
     </QueryClientProvider>
  
</React.StrictMode>
)
