import { Navigate, useOutlet } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

export default function ProtectedRoute() {
  const { accessToken } = useAuth()
  const outlet = useOutlet()

  if (!accessToken) {
    return <Navigate to="/" replace />
  }

  return outlet
}
