import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import coin from "../../assets/capiba.png";

import {
  Nav,
  LogoContainer,
  Logo,
  LogoText,
  Links,
  NavLink,
  UserSection,
  CoinsContainer,
  CoinIcon,
  CoinCount,
  UserContainer,
  ClinicContainer,
  UserName,
  MenuIcon,
  MobileMenu,
  MobileNavLink,
  CloseButton,
} from "./headerStyle";

import { useUserData } from "../../hooks/useUserData";

function Header() {
  const navigate = useNavigate();
  const { userData } = useUserData();
  const userType = userData.userType;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Nav>
      <LogoContainer onClick={() => navigate("/")}>
        <Logo src={logoImage} alt="Logo Meu PET" />
        <LogoText>Meu PET</LogoText>
      </LogoContainer>

      {!isMobile && (
        <Links>
          <NavLink onClick={() => navigate("/")}>Home</NavLink>
          <NavLink
            as="a"
            href="https://adotapet.recife.pe.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AdotaPet
          </NavLink>
          <NavLink onClick={() => navigate("/servicos")}>Serviços</NavLink>
          {userType === "user" && (
            <NavLink onClick={() => navigate("/historico")}>Consultas</NavLink>
          )}
          {userType === "clinic" && (
            <NavLink onClick={() => navigate("/agenda")}>Consultas</NavLink>
          )}
        </Links>
      )}

      {isMobile && <MenuIcon onClick={toggleMenu} />}

      {isMenuOpen && (
        <MobileMenu>
          <CloseButton onClick={toggleMenu}>X</CloseButton>
          <MobileNavLink onClick={() => navigate("/")}>Home</MobileNavLink>
          <MobileNavLink
            as="a"
            href="https://adotapet.recife.pe.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AdotaPet
          </MobileNavLink>
          <MobileNavLink onClick={() => navigate("/servicos")}>
            Serviços
          </MobileNavLink>
          {userType === "user" && (
            <MobileNavLink onClick={() => navigate("/historico")}>
              Consultas
            </MobileNavLink>
          )}
          {userType === "clinic" && (
            <MobileNavLink onClick={() => navigate("/agenda")}>
              Consultas
            </MobileNavLink>
          )}

          {userType ? (
            <>
              {userType === "user" && (
                <UserContainer>
                  <UserName onClick={() => navigate("/perfil-usuario")}>
                    {userData.name}
                  </UserName>
                </UserContainer>
              )}
              {userType === "clinic" && (
                <ClinicContainer>
                  <UserName onClick={() => navigate("/perfil-clinica")}>
                    {userData.name}
                  </UserName>
                </ClinicContainer>
              )}
              <CoinsContainer>
                <CoinIcon src={coin} alt="Moedas" />
                <CoinCount>{userData.moedaCapiba || 0}</CoinCount>
              </CoinsContainer>
            </>
          ) : (
            <MobileNavLink onClick={() => navigate("/login")}>
              Entrar
            </MobileNavLink>
          )}
        </MobileMenu>
      )}

      {!isMobile && userType && (
        <UserSection>
          {userType === "user" && (
            <UserContainer>
              <UserName onClick={() => navigate("/perfil-usuario")}>
                {userData.name}
              </UserName>
            </UserContainer>
          )}
          {userType === "clinic" && (
            <ClinicContainer>
              <UserName onClick={() => navigate("/perfil-clinica")}>
                {userData.name}
              </UserName>
            </ClinicContainer>
          )}
          <CoinsContainer>
            <CoinIcon src={coin} alt="Moedas" />
            <CoinCount>{userData.moedaCapiba || 0}</CoinCount>
          </CoinsContainer>
        </UserSection>
      )}

      {!isMobile && !userType && (
        <NavLink onClick={() => navigate("/login")}>Entrar</NavLink>
      )}
    </Nav>
  );
}

export default Header;
