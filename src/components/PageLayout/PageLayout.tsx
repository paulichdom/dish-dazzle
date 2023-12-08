import { Fragment } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import { useOutlet } from 'react-router-dom'

export default function PageLayout() {
  const outlet = useOutlet()
  return (
    <Fragment>
      <Header />
      <MainWrapper>
        <Layout>{outlet}</Layout>
      </MainWrapper>
      <Footer />
    </Fragment>
  )
}

const MainWrapper = styled.div`
  padding: 64px 0px 96px;
  min-height: 100vh;
`

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr min(1100px) 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  & > * {
    grid-column: 2;
  }
`
