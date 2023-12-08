import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Recipes from '../../pages/Recipes/Recipes'
import RecipeDetails from '../../pages/RecipeDetails'
import Error from '../../pages/Error'
import { AuthProvider } from '../../auth/AuthContext'
import ProtectedRoute from '../ProtectedRoute'
import PageLayout from '../PageLayout'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<PageLayout />}>
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
