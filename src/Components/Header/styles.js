import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainHeader = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Logo = styled(Link)`
  padding: 0.5rem 0;
`;

const Login = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;
  
  span{
    padding: 0 10px;
  }
`;

export {
  Login,
  MainHeader,
  Logo,
  Nav,
}