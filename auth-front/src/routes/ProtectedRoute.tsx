import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContextHook'

export default function ProtectedRoute() {
  // const [isAuth] = useState(false)
  const auth = useAuth()
  // return isAuth ? <Outlet /> : <Navigate to="/" />
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />
}
