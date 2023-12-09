import { Navigate, useOutlet } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

export default function AuthRoute() {
  const { accessToken } = useAuth()
  const outlet = useOutlet()

  if (accessToken) {
    return <Navigate to="/recipes" replace />
  }

  return outlet
}
