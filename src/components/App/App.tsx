import { Fragment } from "react";
import Header from "../Header";
import PageLayout from "../PageLayout";
import Footer from "../Footer";
import { createGlobalStyle } from "styled-components";
import { recipes } from "../../mocks/recipes";
import Recipe from "../Recipe";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Lora', serif;
    }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <PageLayout>
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </PageLayout>
      <Footer />
    </Fragment>
  );
}

export default App;
