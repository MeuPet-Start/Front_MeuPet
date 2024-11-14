import React from 'react';
import { useState } from 'react';
import { HeaderContainer, NavMenu, NavLink , Hamburger, LogoContainer, LogoImage,   LogoText} from './headerStyle';
import logoImage from '../../assets/logo.png';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
  <HeaderContainer>
    <LogoContainer>
      <LogoImage src={logoImage} alt="Logo Meu PET" />
      <LogoText>Meu PET</LogoText>
    </LogoContainer>
    <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
    <NavMenu isOpen={isOpen}>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">Adote</NavLink>
      <NavLink href="/castracao">Castre</NavLink>
      <NavLink href="#">Serviços</NavLink>
      <NavLink href="/login">Entrar</NavLink>
    </NavMenu>
  </HeaderContainer>
);
}
export default Header;
