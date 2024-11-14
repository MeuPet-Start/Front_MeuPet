import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LoginContainer,
  LoginCard,
  LogoContainer,
  LogoImage,
  LogoText,
  Title,
  Input,
  InputContainer,
  Button,
  Divider,
  LinkText,
  Background,
} from "./loginStyle";
import logoImage from "../../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Background>
      <LoginContainer>
        <LoginCard>
          <LogoContainer>
            <LogoImage src={logoImage} alt="Logo Meu PET" />
            <LogoText>Meu PET</LogoText>
          </LogoContainer>
          <Title>LOGIN</Title>
          <Input type="email" placeholder="E-mail" />
          <InputContainer>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </InputContainer>
          <LinkText href="/cadastro">Não tem uma conta? Cadastre-se</LinkText>
          <Button>Entrar com gov.br</Button>
          <Button>Entrar com Conecta</Button>
          <Divider />
          <Button secondary onClick={() => navigate("/")}>
            Voltar
          </Button>
          <Button>Entrar</Button>
        </LoginCard>
      </LoginContainer>
    </Background>
  );
};

export default Login;
