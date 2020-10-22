import React from 'react';
import * as Styled from './styles';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/global';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';  
import { ReactComponent as User } from '../../assets/usuario.svg';  

const Header = () => {
  return (
    <Styled.MainHeader>
      <Container>
        <Styled.Nav>
          <Styled.Logo to='/' aria-label="Dogs - Home">
            <Dogs />
          </Styled.Logo>
          <Styled.Login to='/login'>Login / Criar <span><User/></span> </Styled.Login>
        </Styled.Nav>
      </Container>
    </Styled.MainHeader>
  )
}

export default Header;
