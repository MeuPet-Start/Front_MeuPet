import React from "react";
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
} from "./headerStyle";

import {useUserType} from "../../hooks/useUserType";
import {useUserData} from "../../hooks/useUserData";


const Header = () => {
  const navigate = useNavigate();
  const {userType, userEmail} = useUserType();
  const {userName, userPoints} = useUserData(userEmail);
  

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
        {userType === "user"  && (
          <NavLink onClick={() => navigate("/consultas")}>Consultas</NavLink>
        )}
        {userType === "clinic"  && (
          <NavLink onClick={() => navigate("/consultas")}>Consultas</NavLink>
        )}
      </Links>
      {userType ? (
        <UserSection>
          {userType === "user" && (
            <>
              <CoinsContainer>
                <CoinIcon src={coin} alt="Moedas" />
                <CoinCount>{userPoints || 0}</CoinCount>
              </CoinsContainer>
              <UserContainer>
                <ProfileImage src={userImage} alt="Usuário" />
                <UserName onClick={() => navigate("/perfil-user")}>{userName}</UserName>
              </UserContainer>
            </>
          )}
          {userType === "clinic" && (
            <ClinicContainer>
              <ProfileImage src={clinicImage} alt="Clínica" />
              <UserName onClick={() => navigate("/perfil-clinica")}>ALora</UserName>
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
