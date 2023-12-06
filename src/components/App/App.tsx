import { Fragment } from "react";
import Header from "../Header";
import PageLayout from "../PageLayout";
import Footer from "../Footer";
import { createGlobalStyle } from "styled-components";
import { recipes } from "../../mocks/recipes";
import RecipeGrid from "../RecipeGrid";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Lora', serif;
    }
`;

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <PageLayout>
        <RecipeGrid recipes={recipes} />
      </PageLayout>
      <Footer />
    </Fragment>
  );
}
