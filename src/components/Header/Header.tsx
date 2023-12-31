import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../auth/AuthContext'
import { Row } from '../Layout'

export default function Header() {
  const { logout } = useAuth()
  return (
    <HeaderContainer>
      <Navbar>
        <Logo>Dish Dazzle</Logo>
        <LinksContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/about">About</NavLink>
        </LinksContainer>
      </Navbar>
      <Button onClick={logout}>Logout</Button>
      <Curtain />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  width: 100%;
  background: linear-gradient(0deg, #f5f5f5, #e0e0e0);
  color: #fff;
  padding: 48px 150px 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  top: -28px;
  position: sticky;
  z-index: 2;
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4285f4;
`

const Navbar = styled.nav`
  display: flex;
  gap: 40px;
  align-items: baseline;
`

const LinksContainer = styled(Row)`
  gap: 20px;
`

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Button = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 15px;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
`

const Curtain = styled.div`
  position: absolute;
  right: 0;
  bottom: -31px;
  width: 100%;
  height: 32px;

  &:before {
    display: block;
    width: 100%;
    height: 32px;
    background: linear-gradient(#f5f5f5, rgba(0, 0, 0, 0) 90%);
    content: '';
  }
`
