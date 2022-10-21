import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/authContext'

export function PrivateRoutes({ children }: any) {
  const { user } = useAuth()

  return user ? children : <Navigate to="/" />
}

export default PrivateRoutes
