import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// routes
import Login from './routes/Login.tsx'
import Dashboard from './routes/Dashboard.tsx'
import Signup from './routes/Signup.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import { AuthProvider } from './auth/AuthContextProvider.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  // Add a protected route
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
