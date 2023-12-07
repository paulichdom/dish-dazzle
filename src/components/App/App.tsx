import Header from "../Header";
import PageLayout from "../PageLayout";
import Footer from "../Footer";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "../RegisterForm";
import ErrorPage from "../ErrorPage";
import LoginForm from "../LoginForm";
import Recipes from "../../pages/Recipes/Recipes";
import RecipeDetails from "../../pages/RecipeDetails";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Lora', serif;
    }
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <PageLayout>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
          <Route path='login' element={<RegisterForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </PageLayout>
      <Footer />
    </BrowserRouter>
  );
}
