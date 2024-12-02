import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  LinkText,
  Background,
  ErrorText,
  Label,
  LabelLink,
  ButtonContainer,
} from "./loginStyle";
import logoImage from "../../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUserData } from "../../hooks/useUserData";
import { api } from "../../services/api";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useUserData();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("E-mail inválido")
        .required("O e-mail é obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("A senha é obrigatória"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await api.post(
          "/auth/login",
          values
        );

        if (response.status === 200) {
          localStorage.setItem("jwtToken", response.data.token);
          alert("Login bem-sucedido!");
          login();
          setTimeout(() => {
            navigate("/");
          }, "1000")
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("Credenciais inválidas. Tente novamente.");
        } else {
          console.error("Erro no login:", error);
          alert("Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
      }
    },
  });

  return (
    <Background>
      <LoginContainer>
        <LoginCard>
          <LogoContainer>
            <LogoImage src={logoImage} alt="Logo Meu PET" />
            <LogoText>Meu PET</LogoText>
          </LogoContainer>
          <Title>Login</Title>
          <form onSubmit={formik.handleSubmit}>
            <Label htmlFor="email">E-mail:</Label>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorText>{formik.errors.email}</ErrorText>
            ) : null}
            <Label htmlFor="password">
              Senha:
              <LabelLink href="/recuperar-senha">Esqueceu sua senha?</LabelLink>
            </Label>
            <InputContainer>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Senha"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </InputContainer>
            {formik.touched.password && formik.errors.password ? (
              <ErrorText>{formik.errors.password}</ErrorText>
            ) : null}

            <LinkText href="/cadastro">Não tem uma conta? Cadastre-se</LinkText>
            <ButtonContainer>
              <Button secondary onClick={() => navigate("/")}>
                Voltar
              </Button>
              <Button type="submit">Entrar</Button>
            </ButtonContainer>
          </form>
        </LoginCard>
      </LoginContainer>
    </Background>
  );
};

export default Login;