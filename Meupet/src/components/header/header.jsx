import React from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import userImage from "../../assets/logo.png"; 
import clinicImage from "../../assets/logo.png"; 
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
} from "./headerStyle";

import {useUserType} from "../../hooks/useUserType";



const Header = ({ isLoggedIn, userName, userPoints }) => {
  const navigate = useNavigate();
  const userType = useUserType();

  return (
    <Nav>
      <LogoContainer onClick={() => navigate("/")}>
        <Logo src={logoImage} alt="Logo Meu PET" />
        <LogoText>Meu PET</LogoText>
      </LogoContainer>
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
        {isLoggedIn && userType === "user" && (
          <NavLink onClick={() => navigate("/consultas")}>Consultas</NavLink>
        )}
      </Links>
      {isLoggedIn ? (
        <UserSection>
          {userType === "user" && (
            <>
              <CoinsContainer>
                <CoinIcon src="/path-to-coin-icon.png" alt="Moedas" />
                <CoinCount>{userPoints || 0}</CoinCount>
              </CoinsContainer>
              <UserContainer>
                <ProfileImage src={userImage} alt="Usuário" />
                <UserName>{userName}</UserName>
              </UserContainer>
            </>
          )}
          {userType === "clinic" && (
            <ClinicContainer>
              <ProfileImage src={clinicImage} alt="Clínica" />
              <UserName>{userName}</UserName>
            </ClinicContainer>
          )}
        </UserSection>
      ) : (
        <NavLink onClick={() => navigate("/login")}>Entrar</NavLink>
      )}
    </Nav>
  );
};

export default Header;
