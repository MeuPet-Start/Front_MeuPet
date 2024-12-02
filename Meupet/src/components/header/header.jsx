import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import userImage from "../../assets/logo.png";
import clinicImage from "../../assets/logo.png";
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
  ProfileImage,
  UserName,
  MenuIcon,
  MobileMenu,
  MobileNavLink,
  CloseButton,
} from "./headerStyle";

import { useUserType } from "../../hooks/useUserType";
import { useUserData } from "../../hooks/useUserData";

const Header = () => {
  const navigate = useNavigate();
  const { userType, userEmail } = useUserType();
  console.log("userEmail:" + userEmail)
  const { userName, userPoints, userId } = useUserData(userEmail);

  console.log(userName)
  console.log(userId)

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
            <NavLink onClick={() => navigate("/consultas")}>Consultas</NavLink>
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
            <MobileNavLink onClick={() => navigate("/consultas")}>
              Consultas
            </MobileNavLink>
          )}
          {userType === "clinic" && (
            <MobileNavLink onClick={() => navigate("/consultas")}>
              Consultas
            </MobileNavLink>
          )}

          {userType ? (
            <>
              {userType === "user" && (
                <UserContainer>
                  <ProfileImage src={userImage} alt="Usuário" />
                  <UserName onClick={() => navigate("/perfil-user")}>
                    {userName}
                  </UserName>
                </UserContainer>
              )}
              {userType === "clinic" && (
                <ClinicContainer>
                  <ProfileImage src={clinicImage} alt="Clínica" />
                  <UserName onClick={() => navigate("/perfil-clinica")}>
                    {userName}
                  </UserName>
                </ClinicContainer>
              )}
              <CoinsContainer>
                <CoinIcon src={coin} alt="Moedas" />
                <CoinCount>{userPoints || 0}</CoinCount>
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
              <ProfileImage src={userImage} alt="Usuário" />
              <UserName onClick={() => navigate("/perfil-user")}>
                {userName}
              </UserName>
            </UserContainer>
          )}
          {userType === "clinic" && (
            <ClinicContainer>
              <ProfileImage src={clinicImage} alt="Clínica" />
              <UserName onClick={() => navigate("/perfil-clinica")}>
                {userName}
              </UserName>
            </ClinicContainer>
          )}
          <CoinsContainer>
            <CoinIcon src={coin} alt="Moedas" />
            <CoinCount>{userPoints || 0}</CoinCount>
          </CoinsContainer>
        </UserSection>
      )}

      {!isMobile && !userType && (
        <NavLink onClick={() => navigate("/login")}>Entrar</NavLink>
      )}
    </Nav>
  );
};

export default Header;
