import { ReactNode } from "react";
import styled from "styled-components";

function PageLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}

export default PageLayout;

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr min(1100px) 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32;

  & > * {
    grid-column: 2;
  }
`;
