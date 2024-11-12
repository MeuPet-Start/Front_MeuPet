import React from 'react';
import { HeaderContainer, Logo, NavMenu, NavLink } from './headerStyle';

const Header = () => (
  <HeaderContainer>
    <Logo>Meu PET</Logo>
    <NavMenu>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">Adote</NavLink>
      <NavLink href="#">Castre</NavLink>
      <NavLink href="#">Serviços</NavLink>
      <NavLink href="#">Cadastre-se</NavLink>
      <NavLink href="#">Login</NavLink>
    </NavMenu>
  </HeaderContainer>
);

export default Header;
