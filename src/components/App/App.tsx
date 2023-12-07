import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../LoginForm";
import Recipes from "../../pages/Recipes/Recipes";
import RecipeDetails from "../../pages/RecipeDetails";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Error from "../../pages/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<RecipeDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
