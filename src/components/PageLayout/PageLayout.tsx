import { ReactNode } from "react";
import styled from "styled-components";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <MainWrapper>
      <Layout>{children}</Layout>
    </MainWrapper>
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
  grid-row-gap: 32;

  & > * {
    grid-column: 2;
  }
`;
