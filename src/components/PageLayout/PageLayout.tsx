import { Fragment, ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      <MainWrapper>
        <Layout>{children}</Layout>
      </MainWrapper>
      <Footer />
    </Fragment>
  );
}

const MainWrapper = styled.div`
  padding: 64px 0px 96px;
  min-height: 100vh;
`;

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr min(1100px) 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  & > * {
    grid-column: 2;
  }
`;
