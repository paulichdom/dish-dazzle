import styled from 'styled-components';
import { Row } from '../Layout';

const Header = () => {
  const isLoggedIn = false;
  const onLogout = () => {}
  return (
    <HeaderContainer>
      <Navbar>
      <Logo>Dish Dazzle</Logo>
      <LinksContainer>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/recipes">Recipes</NavLink>
        <NavLink href="/about">About</NavLink>
      </LinksContainer>
      </Navbar>
        {isLoggedIn ? (
          <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        ) : (
          <LoginButton>Login</LoginButton>
        )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: linear-gradient(0deg, #f5f5f5, #e0e0e0);
  color: #fff;
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Navbar = styled.nav`
  display: flex;
  gap: 40px;
  align-items: baseline;
`;

const LinksContainer = styled(Row)`
  gap: 20px;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 15px;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
`;

const LogoutButton = styled(LoginButton)`
  background-color: #f00;
  color: #fff;
`;
