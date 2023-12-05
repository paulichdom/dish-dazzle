import { Fragment } from "react";
import Header from "../Header";
import PageLayout from "../PageLayout";
import Footer from "../Footer";
import { createGlobalStyle } from "styled-components";

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
        <div>TEST</div>
      </PageLayout>
      <Footer />
    </Fragment>
  );
}

export default App;
