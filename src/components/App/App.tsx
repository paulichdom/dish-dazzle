import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Recipes from '../../pages/Recipes/Recipes'
import RecipeDetails from '../../pages/RecipeDetails'
import Error from '../../pages/Error'
import { AuthProvider } from '../../auth/AuthContext'
import ProtectedRoute from '../ProtectedRoute'
import PageLayout from '../PageLayout'
import AuthRoute from '../AuthRoute'
import CreateRecipe from '../../pages/CreateRecipe'
import EditRecipe from '../../pages/EditRecipe'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/" element={<Login />} />
            <Route index path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<PageLayout />}>
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
              <Route path="/recipes/create" element={<CreateRecipe />} />
              <Route path="/recipes/:id/edit" element={<EditRecipe />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
