import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
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
} from "./loginStyle";
import logoImage from "../../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
        const response = await axios.post("http://localhost:8080/api/login", values);

        if (response.status === 200) {
          alert("Login bem-sucedido!");
          navigate("/home"); 
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
          <Title>LOGIN</Title>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="E-mail*"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}

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
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}

            <LinkText href="/cadastro">Não tem uma conta? Cadastre-se</LinkText>
            <Button secondary onClick={() => navigate("/")}>
              Voltar
            </Button>
            <Button type="submit">Entrar</Button>
          </form>
        </LoginCard>
      </LoginContainer>
    </Background>
  );
};

export default Login;
